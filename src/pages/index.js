import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SmallContainer from "../components/SmallContainer";
// import AOS from "aos";
// import "aos/dist/aos.css";
import {
  firstHomeTitle,
  secondHomeTitle,
  thirdHomeTitle,
  firstHomeText,
  secondHomeText,
  thirdHomeText,
} from "../static/homeText";
import Divider from "@material-ui/core/Divider";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import {
  GATSBY_CAROUSEL_1,
  GATSBY_CAROUSEL_2,
  GATSBY_CAROUSEL_3,
  GATSBY_CAROUSEL_4,
  GATSBY_CAROUSEL_5,
} from "../static/dropbox";
// import * as dotenv from "dotenv";
// dotenv.config();
// AOS.init();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // paddingLeft: "85px",
    // paddingRight: "85px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  carousel: {
    width: "100%",
    height: "100%",
    overflowY: "hidden",
    paddingBottom: "50px",
  },
  holder: {
    height: "1500px",
  },
  spacing: {
    paddingTop: "50px",
  },
  paper: {
    // padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  gridContainer: {
    paddingLeft: "125px",
    paddingRight: "125px",
    paddingBottom: "80px",
    paddingTop: "20px",
  },
  gridTable: {
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "20px",
  },
}));

function Home() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //   });
  // }, []);

  return (
    <div className={classes.root}>
      <SEO title="Malawi Compassion" />
      <img className={classes.carousel} src={GATSBY_CAROUSEL_1} />
      <div>
        <SmallContainer
          header="Mission Statement"
          text="this is our mission statement"
        />
      </div>
      <Grid
        container
        spacing={1}
        className={classes.gridContainer}
        alignItems="stretch"
      >
        <Grid item xs={5}>
          <img className={classes.carousel} src={GATSBY_CAROUSEL_3} />
        </Grid>
        <Grid item xs={7}>
          <Typography className={classes.gridTable} variant="h4">
            {firstHomeTitle}
          </Typography>
          <Typography className={classes.gridTable}>{firstHomeText}</Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={6} className={classes.gridContainer}></Grid>
      <Grid
        container
        spacing={1}
        className={classes.gridContainer}
        alignItems="stretch"
      >
        <Grid item xs={7}>
          <Typography className={classes.gridTable} variant="h4">
            {secondHomeTitle}
          </Typography>
          <Typography className={classes.gridTable}>
            {secondHomeText}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <img className={classes.carousel} src={GATSBY_CAROUSEL_2} />
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={6} className={classes.gridContainer}></Grid>
      <Grid
        container
        spacing={1}
        className={classes.gridContainer}
        alignItems="stretch"
      >
        <Grid item xs={5}>
          <img className={classes.carousel} src={GATSBY_CAROUSEL_5} />
        </Grid>
        <Grid item xs={7}>
          <Typography className={classes.gridTable} variant="h4">
            {thirdHomeTitle}
          </Typography>
          <Typography className={classes.gridTable}>{thirdHomeText}</Typography>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Home;
