import React, { PropsWithChildren } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import { Theme } from 'theme';

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  active?: boolean;
  className?: string;
  display?: 'block' | 'inline';
  hoverEffect?: 'none' | 'underline' | 'contained';
  component?: 'button' | 'a' | 'div';
  href?: string;
};

const Button = React.forwardRef<HTMLElement, PropsWithChildren<Props>>(
  (props, ref) => {
    const {
      component = 'button',
      hoverEffect = 'none',
      display = 'block',
      active,
      className,
      onClick,
      children,
      href,
    } = props;
    const classes = useStyles({ display });

    return React.createElement(component, {
      className: clsx(
        classes.root,
        {
          [classes[hoverEffect]]: hoverEffect !== 'none',
          [classes.active]: active,
        },
        className
      ),
      ref: ref,
      onClick: onClick,
      children: <span>{children}</span>,
      href: href,
    });
  }
);

const useStyles = createUseStyles<Theme>(
  (theme) => ({
    root: {
      position: 'relative',
      padding: theme.spacing(1, 2),

      background: 'none',
      border: 'none',
      fontFamily: theme.typography.fontFamily,
      fontSize: '1rem',
      display: ({ display }) => display,
      cursor: 'pointer',
      color: 'inherit',

      '&:focus': {
        outline: 0,
      },
    },
    underline: {
      '& span:before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '1px',
        bottom: 0,
        left: 0,
        background: 'currentColor',
        transformOrigin: '50% 100%',
        transition:
          'clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1)',
        clipPath:
          'polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)',
      },

      '&:hover span:before, &$active span:before': {
        transform: 'translate3d(0, 2px, 0) scale3d(1.08, 2, 1)',
        clipPath:
          'polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%)',
      },

      '& span': {
        position: 'relative',
        display: 'inline-block',
        transition: 'transform 0.3s cubic-bezier(0.2, 1, 0.8, 1)',
      },

      '&:hover span': {
        transform: 'translate3d(0, -2px, 0)',
      },
    },
    contained: {
      '&:before': {
        content: '""',
        backgroundColor: theme.palette.common.black,
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        transform: 'scaleY(0)',
        transformOrigin: '0 100%',
        transition: 'all 0.25s ease-in-out',
        zIndex: -1,
      },

      '&:hover:before, &$active:before': {
        transform: 'scaleY(1)',
      },

      '& span': {
        transition: 'color 0.25s ease-in-out',
        transform: 'translateZ(0)',
      },

      '&:hover span, &$active span': {
        color: theme.palette.text.primaryOnDark,
      },
    },
    active: {},
  }),
  { name: 'button' }
);

export default Button;
