import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SmallContainer from "../components/SmallContainer";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  firstHomeTitle,
  secondHomeTitle,
  thirdHomeTitle,
  firstHomeText,
  secondHomeText,
  thirdHomeText,
} from "../components/text.jsx";
import Divider from "@material-ui/core/Divider";
import Footer from "../components/Footer";

import Layout from "../containers/Layout";

AOS.init();

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
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const {
    REACT_APP_CAROUSEL_1,
    REACT_APP_CAROUSEL_2,
    REACT_APP_CAROUSEL_3,
    REACT_APP_CAROUSEL_4,
    REACT_APP_CAROUSEL_5,
  } = process.env;

  return (
    <Layout>
      <div className={classes.root}>
        <Container>
          <img className={classes.carousel} src={REACT_APP_CAROUSEL_1} />
        </Container>
        <div data-aos="fade-in">
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
          <Grid data-aos="fade-down" item xs={5}>
            <img className={classes.carousel} src={REACT_APP_CAROUSEL_3} />
          </Grid>
          <Grid data-aos="fade-up" item xs={7}>
            <Typography className={classes.gridTable} variant="h4">
              {firstHomeTitle}
            </Typography>
            <Typography className={classes.gridTable}>
              {firstHomeText}
            </Typography>
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
          <Grid data-aos="fade-up" item xs={7}>
            <Typography className={classes.gridTable} variant="h4">
              {secondHomeTitle}
            </Typography>
            <Typography className={classes.gridTable}>
              {secondHomeText}
            </Typography>
          </Grid>
          <Grid data-aos="fade-down" item xs={5}>
            <img className={classes.carousel} src={REACT_APP_CAROUSEL_2} />
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
          <Grid data-aos="fade-down" item xs={5}>
            <img className={classes.carousel} src={REACT_APP_CAROUSEL_5} />
          </Grid>
          <Grid data-aos="fade-up" item xs={7}>
            <Typography className={classes.gridTable} variant="h4">
              {thirdHomeTitle}
            </Typography>
            <Typography className={classes.gridTable}>
              {thirdHomeText}
            </Typography>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </Layout>
  );
}

export default Home;
