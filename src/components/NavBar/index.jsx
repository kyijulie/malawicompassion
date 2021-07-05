import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "gatsby";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    marginRight: "auto",
  },
  appbar: {
    backgroundColor: "#F8F8F8",
    color: "black",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar className={classes.appbar} position="sticky">
      <Tabs onChange={handleChange} value={value} indicatorColor="primary">
        <Tab
          value={0}
          label="malawi compassion"
          to="/"
          component={Link}
          className={classes.title}
        />
        <Tab
          value={1}
          label="about"
          to="/About"
          component={Link}
          className={classes.menuButton}
        />
        <Tab
          value={2}
          label="ministry leaders"
          to="/MinistryLeaders"
          component={Link}
          className={classes.menuButton}
        />
        <Tab
          value={3}
          label="chisomo foundation"
          to="/ChisomoFoundation"
          component={Link}
          className={classes.menuButton}
        />
        <Tab
          value={4}
          label="shalom christian center"
          to="/ShalomChristianCenter"
          component={Link}
          className={classes.menuButton}
        />
        <Tab
          value={5}
          label="donate"
          to="/Donate"
          component={Link}
          className={classes.menuButton}
        />
        {/* <Tab value={5} label="contact us" to='/contact-us' component={Link} className={classes.menuButton}/> */}
      </Tabs>
    </AppBar>
  );
}
