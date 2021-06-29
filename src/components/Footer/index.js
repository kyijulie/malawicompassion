import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    // marginRight: "auto",
  },
  style: {
    backgroundColor: "#F8F8F8",
    color: "black",
    marginTop: "100px",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    // <AppBar className={classes.style} position="sticky">
    //   hello here
    // </AppBar>
    // <footer>
    // <Box disableGutters={true}>
    <Container maxWidth="xl" className={classes.style}>
      <Grid container spacing={10} justify="flex-end">
        <Grid maxWidthMd item>
          <Box py={2} px={1}>
            <Typography variant="h5">Contact Us</Typography>
          </Box>
          <Box p={1}>
            <Typography variant="subtitle1">Address:</Typography>
            <Typography>
              aiwejfal;sj dlkfj lskjxt aoisj blahlawe afkls jdlkf jText right
              here
            </Typography>
          </Box>
          <Box p={1}>
            {" "}
            <Typography variant="subtitle1">Phone:</Typography>
            <Typography>123-456-7890</Typography>
          </Box>
          <Box p={1}>
            {" "}
            <Typography variant="subtitle1">Email:</Typography>
            <Typography>malawi@email.com</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
    // </Box>
  );
}
