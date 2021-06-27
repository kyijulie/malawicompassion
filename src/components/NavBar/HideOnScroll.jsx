import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    marginRight: 'auto'
  },
  navBarContainer: {
    overflow: 'hidden',
    backgroundColor: '#f1f1f1',
    padding: '40px 10px',
    transition: '0.4s',
    position: 'fixed',
    width: '100%',
    top: '0',
    zIndex: '99'
  },
  navBarFont: {

  }
}));

function HideOnScroll(props) {
  const classes = useStyles();
  const { children, window } = props;
  // todo: make navbar visible bigger height to smaller
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default HideOnScroll