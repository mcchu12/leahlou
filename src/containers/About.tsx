import React, { FC, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { Theme } from 'theme';
import { Typography } from '../components';

import { getAbout } from '../features/profile/actions';

const mapStateToProps = (state: RootState) => ({
  about: state.profile.about,
});

const connector = connect(mapStateToProps, { getAbout });

type Props = ConnectedProps<typeof connector>;

const About: FC<Props> = ({ about, getAbout }) => {
  const classes = useStyles();

  useEffect(() => {
    if (!about) getAbout();
  }, [about, getAbout]);

  return (
    <div className={classes.root}>
      <Typography variant="h4">Some word about me</Typography>

      <div className={classes.introduction}>
        <div>
          <img src={about?.avatar} alt="avatar" />
        </div>
        <div>
          <Typography>{about?.description}</Typography>
        </div>
      </div>
    </div>
  );
};

const useStyles = createUseStyles<Theme>(
  (theme) => ({
    root: {},
    introduction: {
      margin: theme.spacing(4, 0),

      '& > *': {
        margin: theme.spacing(2, 0),
      },

      '& img': {
        width: '100%',
      },

      [theme.breakpoints.up('md')]: {
        display: 'flex',
        marginLeft: -theme.spacing(3),

        '& > *': {
          margin: theme.spacing(3),
          flex: 1,
        },
      },
    },
  }),
  { name: 'about' }
);

export default connector(About);
