import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from 'theme';
import { Button } from '../../components';

type Props = {
  socials: Social[] | null;
};

const SocialSidebar: FC<Props> = ({ socials }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {socials &&
        socials.map((social) => (
          <Button
            key={social.platform}
            hoverEffect="contained"
            component="a"
            href={social.url}
          >
            {social.platform}
          </Button>
        ))}
    </div>
  );
};

const useStyles = createUseStyles<Theme>((theme) => ({
  root: {
    display: 'none',
    position: 'fixed',
    right: '2vw',
    bottom: '2vw',
    zIndex: 1000,
    textTransform: 'capitalize',

    '& a': {
      padding: theme.spacing(1),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textTransform: 'capitalize',
    },

    '& span': {
      writingMode: 'vertical-rl',
    },

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default SocialSidebar;
