import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: "450px",
    paddingRight: "450px",
  },
  card: {
    flexDirection: "row",
    padding: "20px",
    margin: "50px",
  },
}));

const text = `
Malawi Compassion is a non-profit missions support ministry that began in March of 2020 at the beginning of COVID Pandemic that paralyzed the global community.  You might say, why during the pandemic?  That is the same question that we asked ourselves and came to the conviction that this is the precise time that the people of Malawi need global assistance the most.  This organization is a faith based Christian organization passionate about providing mercy ministry for two sister organizations in Malawi headed by Pastors Kenneth and Alfred.  Pastor Kenneth is the head of Chisomo Foundation committed to helping the people of Malawi.  Please see the tab on his ministry.  Pastor Alfred is the head of Shalom Ministry also committed to the people of Malawi, especially for women and children that are vulnerable members of the society.  Please also see the tab on his ministry for further information.

Currently Malawi Compassion is raising funds to help the following ministries.

Pastors Alfred and Kenneth work in the field to help their own natives in great need.  As partners in this effort to help the Malawians we want to ask you for your prayer and financial support.  It is crucial that they get the help they need especially post COVID Pandemic.  Please help us support the ministries abroad.

`;

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="600"
            image={process.env.REACT_APP_MALAWI_GROUP_PHOTO}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              About Us
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
