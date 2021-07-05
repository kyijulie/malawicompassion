import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SEO from "../components/SEO";
import { DONATION_BANNER } from "../static/dropbox";
import Footer from "../components/Footer";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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
  card: {
    marginLeft: "150px",
    marginRight: "150px",
    flexDirection: "row",
    margin: "50px",
  },
}));

export default function Donate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SEO title="Donate" />
      <img className={classes.banner} src={DONATION_BANNER} />
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Donation coming soon
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Footer />
    </div>
  );
}
