import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SEO from "../components/SEO";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Donate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SEO title="Donate" />
      Donate
    </div>
  );
}
