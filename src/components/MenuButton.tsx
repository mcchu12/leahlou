import React, { FC } from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { Theme } from 'theme';

type Props = {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isOpen?: boolean;
  color?: 'light' | 'dark';
  close?: boolean; // use as close button
};

const MenuButton: FC<Props> = ({
  className,
  onClick,
  isOpen = false,
  color = 'light',
  close = false,
}) => {
  const classes = useStyles({ color });

  return (
    <div
      className={clsx(
        classes.root,
        {
          [classes.isOpen]: isOpen || close,
          [classes[`${color}Bg`]]: color,
        },
        className
      )}
      role="button"
      onClick={onClick}
    >
      <div className={classes.bun}>
        <span className={classes.burger}></span>
      </div>
    </div>
  );
};

const useStyles = createUseStyles<Theme>((theme) => {
  const size = 20;

  return {
    root: {
      position: 'relative',
      height: size,
      width: size,
      cursor: 'pointer',

      '& div:before, & div:after, & span:before, & span:after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '12%',
        transition: 'all 0.5s cubic-bezier(0.1, 0.9, 0, 1.2)',
        borderRadius: size,
      },

      '&$isOpen div:before, &$isOpen div:after': {
        width: 0,
      },

      '&$isOpen span:before': {
        transform: 'rotate(135deg)',
      },

      '&$isOpen span:after': {
        transform: 'rotate(45deg)',
      },
    },
    lightBg: {
      '& div:before, & div:after, & span:before, & span:after': {
        background: theme.palette.common.white,
      },
    },
    darkBg: {
      '& div:before, & div:after, & span:before, & span:after': {
        background: theme.palette.common.black,
      },
    },
    bun: {
      '&:before': {
        top: '10%',
        right: 0,
      },

      '&:after': {
        bottom: '10%',
        left: 0,
      },
    },
    burger: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      height: size,
      width: size,
    },
    isOpen: {},
  };
});

export default MenuButton;
