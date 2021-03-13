import React, { PropsWithChildren } from 'react';
import { Theme } from 'theme';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  span: 'span',
  caption: 'span',
  overline: 'span',
};

type Variant = keyof typeof variantMapping;

interface Props {
  variant?: Variant;
  className?: string;
}

const Typography = React.forwardRef<HTMLElement, PropsWithChildren<Props>>(
  (props, ref) => {
    const classes = useStyles();

    const { variant = 'body1' } = props;
    const Component = variantMapping[variant];

    return React.createElement(Component, {
      className: clsx(
        classes.root,
        props.className,
        variant !== 'span' && classes[variant]
      ),
      ref: ref,
      children: props.children,
    });
  }
);

const useStyles = createUseStyles(
  (theme: Theme) => ({
    root: {
      fontFamily: theme.typography.fontFamily,
    },
    h1: theme.typography.h1,
    h2: theme.typography.h2,
    h3: theme.typography.h3,
    h4: theme.typography.h4,
    h5: theme.typography.h5,
    h6: theme.typography.h6,
    body1: theme.typography.body1,
    body2: theme.typography.body2,
    subtitle1: theme.typography.subtitle1,
    subtitle2: theme.typography.subtitle2,
    caption: theme.typography.caption,
    overline: theme.typography.overline,
  }),
  { name: 'typography' }
);

export default Typography;
