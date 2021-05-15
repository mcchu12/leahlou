import React, { FC, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { Theme } from 'theme';
import { Typography } from '../components';
import { getPersonal } from '../features/profile/actions';

const mapStateToProps = (state: RootState) => ({
  personal: state.profile.personal,
});

const connector = connect(mapStateToProps, { getPersonal });

type Props = ConnectedProps<typeof connector>;

const Contact: FC<Props> = ({ personal, getPersonal }) => {
  const classes = useStyles();

  useEffect(() => {
    if (!personal) getPersonal();
  }, [personal, getPersonal]);

  if (!personal) return <></>;

  return (
    <div className={classes.root}>
      <Typography variant="h5">
        Do you want to know more or discuss a potential project? Please contact
        me and let's have a chat about what I can do for you.
      </Typography>
      <div className={classes.contact}>
        <Typography variant="span">{personal.name}</Typography>
        <Typography variant="span">{personal.location}</Typography>
        <Typography variant="span">{personal.phone}</Typography>
        <Typography variant="span">{personal.email}</Typography>
      </div>
    </div>
  );
};

const useStyles = createUseStyles<Theme>(
  (theme) => ({
    root: {
      maxWidth: '700px',
      height: '70vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contact: {
      margin: theme.spacing(3, 0),
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',

      '& > *': {
        margin: theme.spacing(1, 0),
      },
    },
  }),
  { name: 'contact' }
);

export default connector(Contact);
