import React, { FC, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { connect, ConnectedProps } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Theme } from 'theme';
import Header from './Header';
import SocialSidebar from './SocialSidebar';
import { getPersonal } from '../../features/profile/actions';

const mapStateToProps = (state: RootState) => ({
  personal: state.profile.personal,
});

const connector = connect(mapStateToProps, { getPersonal });

type Props = ConnectedProps<typeof connector>;

const Layout: FC<Props> = ({ personal, getPersonal, children }) => {
  const location = useLocation();
  const onDark = location.pathname === '/works';
  const classes = useStyles({ onDark });

  useEffect(() => {
    if (!personal) getPersonal();
  }, [personal, getPersonal]);

  if (!personal) return <></>;

  return (
    <div className={classes.root}>
      <Header
        onDark={onDark}
        socials={personal.socials}
        logoText={personal.name}
      />
      <main>
        <section className={classes.section}>
          <div className={classes.contentWrapper}>{children}</div>
        </section>
      </main>
      <SocialSidebar socials={personal.socials} />
    </div>
  );
};

const useStyles = createUseStyles<Theme>(
  (theme) => ({
    root: {
      color: ({ onDark }) =>
        onDark ? theme.palette.text.primaryOnDark : theme.palette.text.primary,
    },
    section: {
      [theme.breakpoints.up('sm')]: {
        fontSize: '1.2em',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '1.4em',
      },
    },
    contentWrapper: {
      maxWidth: theme.breakpoints.values('lg'),
      margin: '0 auto',
      padding: '6vh 16px',

      [theme.breakpoints.up('sm')]: {
        padding: '6vh 2vw',
      },
    },
  }),
  { name: 'layout' }
);

export default connector(Layout);
