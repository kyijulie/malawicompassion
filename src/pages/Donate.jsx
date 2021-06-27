import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../containers/Layout";

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
    <Layout>
      <div className={classes.root}>Donate</div>
    </Layout>
  );
}
