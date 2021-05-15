import clsx from 'clsx';
import React, { FC, useState, useRef, useEffect } from 'react';
import { gsap, Power1 } from 'gsap';
import { createUseStyles } from 'react-jss';
import { Link, useLocation } from 'react-router-dom';
import { Theme } from 'theme';
import { Typography, Button, MenuButton } from '../../components';

const navLinks = [
  { path: '/works', name: 'works' },
  { path: '/about', name: 'about' },
  { path: '/contact', name: 'contact' },
];

type Props = {
  onDark?: boolean;
  socials: Social[] | null;
  logoText: string;
};

const Header: FC<Props> = ({ onDark = false, socials, logoText }) => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState<boolean>();
  const mobileNavEl = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();
  const classes = useStyles({ isMenuOpen });

  useEffect(() => {
    if (mobileNavEl.current) {
      const container = mobileNavEl.current;
      if (!tl.current) {
        tl.current = gsap
          .timeline({ paused: true })
          .set(container, { display: 'flex' })
          .from(container, { autoAlpha: 0 })
          .from([container.firstElementChild?.children, container.lastChild], {
            autoAlpha: 0,
            scale: 0,
            ease: Power1.easeOut,
            stagger: 0.2,
          });
      }
    }
  }, []);

  const handleMenuClick = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
      if (tl.current) tl.current.reverse();
    } else {
      setMenuOpen(true);

      if (tl.current) tl.current.play();
    }
  };

  const handleMenuClose = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
      if (tl.current) tl.current.reverse();
    }
  };

  const renderToolbar = () => (
    <div className={classes.toolbar}>
      <Link to="/" onClick={handleMenuClose}>
        <Typography className={classes.logo} variant="h5">
          {logoText}
        </Typography>
      </Link>

      <nav className={classes.nav}>
        {navLinks.map(({ path, name }) => (
          <Link key={path} to={path}>
            <Button
              component="div"
              hoverEffect="underline"
              display="inline"
              active={location.pathname === path}
            >
              {name}
            </Button>
          </Link>
        ))}
      </nav>

      <MenuButton
        className={classes.menuButton}
        onClick={handleMenuClick}
        isOpen={isMenuOpen}
        color={isMenuOpen ? 'dark' : onDark ? 'light' : 'dark'}
      />
    </div>
  );

  const renderMobileNav = () => (
    <div
      ref={mobileNavEl}
      className={clsx(classes.mobileNav, {
        [classes.isMenuOpen]: isMenuOpen,
      })}
    >
      <nav>
        {navLinks.map(({ path, name }) => (
          <Link key={path} to={path}>
            <Button
              component="div"
              hoverEffect="contained"
              onClick={handleMenuClick}
              className={classes.mobileLink}
            >
              {name}
            </Button>
          </Link>
        ))}
      </nav>

      <div className={classes.social}>
        {socials &&
          socials.map((social) => (
            <Button
              key={social.platform}
              hoverEffect="underline"
              display="inline"
              component="a"
              href={social.url}
            >
              {social.platform}
            </Button>
          ))}
      </div>
    </div>
  );

  return (
    <header className={classes.root}>
      {renderToolbar()}

      {renderMobileNav()}
    </header>
  );
};

const useStyles = createUseStyles<Theme>(
  (theme) => ({
    root: {
      padding: theme.spacing(2),

      position: 'sticky',
      zIndex: 1000,

      [theme.breakpoints.up('sm')]: {
        padding: '2vmin 2vw',
      },

      '& a': {
        textTransform: 'capitalize',
      },
    },

    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      zIndex: 100,
    },

    logo: {
      color: ({ isMenuOpen }) => isMenuOpen && theme.palette.text.primary,
      transition: 'color 200ms ease-out',
      fontWeight: 500,
    },

    nav: {
      display: 'none',

      '& a': {
        marginLeft: theme.spacing(1),
      },

      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    menuButton: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    mobileNav: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.text.primary,

      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: theme.palette.common.white,

      '& a': {
        textAlign: 'center',
      },

      '& nav': {
        marginTop: theme.spacing(3),
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },

      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    mobileLink: {
      fontSize: theme.typography.h4.fontSize,
      margin: theme.spacing(1, 0),
    },
    social: {
      flex: 0,
      marginBottom: theme.spacing(3),

      '& button': {
        textTransform: 'capitalize',
      },
    },
    isMenuOpen: {},
  }),
  { name: 'header' }
);

export default Header;
