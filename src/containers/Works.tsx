import React, { FC, useEffect, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { gsap } from 'gsap';
import { Theme } from 'theme';
import { Typography } from '../components';
import { getWorks } from '../features/works/actions';

const mapStateToProps = (state: RootState) => ({
  works: Object.values(state.works.infos),
});
const dispatchProps = { getWorks };

const connector = connect(mapStateToProps, dispatchProps);

type Props = ConnectedProps<typeof connector>;

const WorkView: FC<Props> = ({ works, getWorks }) => {
  const classes = useStyles();
  const history = useHistory();

  const linkRefs = useRef<HTMLDivElement[]>([]);
  const screenRefs = useRef<HTMLDivElement[]>([]);
  const currentRef = useRef<number>(0);

  useEffect(() => {
    if (works.length === 0) getWorks();
  }, [getWorks, works]);

  const handleMouseEnter = (ev: React.MouseEvent<HTMLDivElement>) => {
    const position = linkRefs.current.indexOf(ev.currentTarget);

    if (position === currentRef.current) {
      return false;
    }

    const currentScreen = screenRefs.current[currentRef.current];
    const nextScreen = screenRefs.current[position];
    currentRef.current = position;

    gsap.killTweensOf([currentScreen, nextScreen]);
    hideScreen(currentScreen);
    showScreen(nextScreen);
  };

  const showScreen = (screen: HTMLElement) => {
    gsap
      .timeline()
      .set(screen, { opacity: 1, zIndex: 1 })
      .to(screen.firstChild, {
        duration: 1.8,
        ease: 'Power2.easeOut',
        startAt: { scale: 1.07 },
        scale: 1,
      });
  };

  const hideScreen = (screen: HTMLElement) => {
    gsap
      .timeline()
      .set(screen, { opacity: 0, zIndex: 10 })
      .to(screen, {
        duration: 0.4,
        ease: 'Power2.easeOut',
        opacity: 0,
        onComplete: () => gsap.set(screen, { zIndex: 1 }),
      });
  };

  const renderProjects = () => (
    <div className={classes.projects}>
      <ul>
        {works.map(({ name, theme, date }, index) => (
          <li
            key={name}
            onClick={() => history.push(`${history.location.pathname}/${name}`)}
          >
            <div>
              <Typography variant="body2">{theme}</Typography>
              <div
                ref={(ref) => ref && linkRefs.current.push(ref)}
                className={classes.projectName}
                onMouseEnter={handleMouseEnter}
              >
                <Typography variant="subtitle2">{`${index + 1}.`}</Typography>
                <Typography variant="h4">{name}</Typography>
                <Typography variant="subtitle2">{`/ ${date}`}</Typography>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderScreens = () => (
    <div className={classes.screens} aria-hidden={true}>
      {works.map(({ thumbnail }, index) => (
        <div
          ref={(ref) => ref && screenRefs.current.push(ref)}
          key={index}
          className={classes.screenItem}
        >
          <div
            className={classes.screen}
            style={{ backgroundImage: `url(${thumbnail})` }}
          ></div>
          <div
            className={classes.screen}
            style={{ backgroundImage: `url(${thumbnail})` }}
          ></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={classes.root}>
      {renderProjects()}
      {renderScreens()}
    </div>
  );
};

const useStyles = createUseStyles<Theme>(
  (theme) => {
    const screenStyle = {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      minHeight: '100vh',
    };

    return {
      root: {
        color: theme.palette.text.primaryOnDark,
      },
      projects: {
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position: 'relative',
        zIndex: '100',

        '& li': {
          margin: theme.spacing(4, 0),
          cursor: 'pointer',
          textTransform: 'capitalize',
        },

        '& p': {
          color: theme.palette.text.secondary,
        },

        [theme.breakpoints.up('sm')]: {
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1em',
        },
      },
      projectName: {
        position: 'relative',

        '& h6:first-child, & h6:last-child': {
          display: 'none',
        },

        [theme.breakpoints.up('sm')]: {
          '& h6:first-child, & h6:last-child': {
            display: 'block',
            fontStyle: 'italic',
          },

          '& h6:first-child': {
            opacity: 0,
            position: 'absolute',
            bottom: '10%',
            left: -50,
          },

          '& h6:last-child': {
            opacity: 0,
            position: 'absolute',
            bottom: '10%',
            right: '-50%',
            textTransform: 'uppercase',
            fontWeight: 600,
          },

          '&:hover h6': {
            opacity: 1,
            transition: 'opacity 200ms ease-in-out',
          },
        },
      },
      screens: {
        ...screenStyle,
        overflow: 'hidden',
      },
      screenItem: {
        ...screenStyle,
        background: `#282b27`,
        opacity: 0,

        '&:first-child': {
          opacity: 1,
          zIndex: 10,
        },
      },
      screen: {
        ...screenStyle,
        background: `no-repeat center center fixed`,

        '&:first-child': {
          opacity: 0.5,
        },
        '&:last-child': {
          clipPath: 'polygon(37% 15%, 63% 15%, 63% 85%, 37% 85%)',
        },
      },
    };
  },
  { name: 'workView' }
);

export default connector(WorkView);
