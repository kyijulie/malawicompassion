import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Layout from "../containers/Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  card: {
    flexDirection: "row",
    padding: "20px",
    margin: "50px",
  },
}));

export default function MinistryLeaders() {
  const classes = useStyles();

  return (
    <Layout>
      {/* <div> */}
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="video"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Rev Alfred"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Rev Alfred Dickinson Kasiya Nyanda
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Information here
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button size="small" color="primary">
                Share
              </Button> */}
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="video"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Rev Kenneth"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Rev Alemekezeke Kenneth Chikondi Phiri
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Information here
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
      {/* </div> */}
    </Layout>
  );
}
