import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SEO from "../components/SEO";
import { DONATION_BANNER } from "../static/dropbox";
import Footer from "../components/Footer";

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
  banner: {
    width: "100%",
    height: "100%",
    overflowY: "hidden",
    paddingBottom: "50px",
  },
}));

export default function Donate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SEO title="Donate" />
      <img className={classes.banner} src={DONATION_BANNER} />
      <Footer />
    </div>
  );
}
