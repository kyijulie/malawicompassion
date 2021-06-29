import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SEO from "../components/SEO";
import PdfView from "../components/PdfView";
import { SHALOM_BANNER } from "../static/dropbox";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    flexDirection: "column",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  card: {
    // flexDirection: "row",
    padding: "20px",
    margin: "50px",
  },
  banner: {
    width: "100%",
    height: "100%",
    overflowY: "hidden",
    paddingBottom: "50px",
  },
}));

// chisomo foundation
// shalom christian center

export default function ShalomChristianCenter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SEO title="Shalom Christian Center" />
      <img className={classes.banner} src={SHALOM_BANNER} />

      <Card className={classes.card}>
        <CardActions>
          <Button size="small" color="primary">
            Chisomo Foundation
          </Button>
          <Button size="small" color="primary">
            Shalom Christian Center
          </Button>
        </CardActions>
      </Card>
      <Footer />
    </div>
  );
}
