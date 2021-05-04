import React, { FC, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { connect, ConnectedProps } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Theme } from 'theme';
import Header from './Header';
import SocialSidebar from './SocialSidebar';
import { getSocials } from '../../features/profile/actions';

const mapStateToProps = (state: RootState) => ({
  socials: state.profile.socials,
});

const connector = connect(mapStateToProps, { getSocials });

type Props = ConnectedProps<typeof connector>;

const Layout: FC<Props> = ({ socials, getSocials, children }) => {
  const location = useLocation();
  const onDark = location.pathname === '/works';
  const classes = useStyles({ onDark });

  useEffect(() => {
    if (!socials) getSocials();
  }, [socials, getSocials]);

  return (
    <div className={classes.root}>
      <Header onDark={onDark} socials={socials} />
      <main>
        <section className={classes.section}>
          <div className={classes.contentWrapper}>{children}</div>
        </section>
      </main>
      <SocialSidebar socials={socials} />
    </div>
  );
};

const useStyles = createUseStyles<Theme>(
  (theme) => ({
    root: {
      color: ({ onDark }) =>
        onDark ? theme.palette.text.primaryOnDark : theme.palette.text.primary,
    },
    section: {},
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
