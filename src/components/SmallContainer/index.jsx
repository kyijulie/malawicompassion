import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: "30px",
    textAlign: "center",
  },
  paper: {
    height: 540,
    width: 300,
  },
  control: {
    padding: theme.spacing(2),
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

function SmallContainer({ header, text }) {
  const classes = useStyles();

  return (
    // <div data-aos="fade-in">
    <Container className={classes.container}>
      <h3 className={classes.title}>{header}</h3>
      <p className={classes.title}>{text}</p>
    </Container>
    // </div>
  );
}

export default SmallContainer;
