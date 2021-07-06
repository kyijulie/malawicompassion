import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SEO from "../components/SEO";
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
    padding: "20px",
    marginLeft: "150px",
    marginRight: "150px",
  },
  banner: {
    width: "100%",
    height: "100%",
    overflowY: "hidden",
    paddingBottom: "50px",
  },
}));

export default function ShalomChristianCenter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SEO title="Shalom Christian Center" />
      <img className={classes.banner} src={SHALOM_BANNER} />

      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Shalom Christian Center
          </Typography>
          <Typography component="primary" variant="subtitle1">
            Overall Goal
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Shalom is a Christian organization that was established in 2013 and
            it is located in the North West of Lilongwe. This place is one of
            the areas that has been affected by HIV AIDS, and many people died,
            leaving many orphans without any support.Shalom was born to
            transform the lives orphans and underprivileged people who don’t
            have any hope their future, so that they may become responsible
            generation. We serve orphans, vulnerable children, elderly people,
            single mothers through kindergarten, elementary school, tailoring
            school and we pay fees to some few Secondary school students. In
            addition, we provide food, clothes, health care, and Spiritual
            guidance to all the mentioned above groups. Our vision is to improve
            the living standards of people in our community so that we can bring
            a total transformation even the vulnerable people. Shalom has a
            farming land where we grow crops to support the vulnerable people
            and also for its sustainability. We have the board of directors and
            the management which runs the ministry.
          </Typography>
          <Typography component="primary" variant="subtitle1">
            BOARD OF DIRECTORS
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Rev Alfred D.K Nyanda =Board Chair <br />
            Mr Alinafe Sosola = Treasurer <br />
            Mrs Getrude Nyanda= Secretary <br />
            Rev Antony W. Gama = Vice Chair <br />
            Rev Alexander C.Kambiri = Vice Secretary <br />
            Rev Joseph Mthinda = Member <br />
            Village Headman Kabwabwa = Chief <br />
            Mr Osward Mkomanthenga = Member <br />
            Mr Mavuto Ching’amba = Member <br />
            Mr Yohane Chayamba = Member <br />
            Mrs Mary Ben = Member <br />
            Mrs Enetta Chisenga = Member <br />
          </Typography>
          <Typography component="primary" variant="subtitle1">
            MANAGEMENT TEAM
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Rev Alfred D. K Nyanda=Administrator <br />
            Mr Frank Phiri =Accounts Clerk
            <br />
            Mrs Getrude Nyanda=Teacher
            <br />
            Mr Mavuto Ching’amba=Teacher
            <br />
            Mr Osward Mkomanthenga = Teacher
            <br />
          </Typography>
          <Typography component="primary" variant="subtitle1">
            SPECIFIC PLANS FOR 2021
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Shalom would like to do the following activities in 2021: <br />
            (1)To start layering Chickens for the sustainability of the Ministry{" "}
            <br />
            (2)To provide a safe and clean water on our premises <br />
            (3)To pay school fees for 20 orphans Secondary school Students{" "}
            <br />
            (4)To continue feeding all orphans and elderly people in the
            surrounding area from the month of January to March when its a lean
            period. Mostly people lacks food in these months. <br />
          </Typography>
          <Typography component="primary" variant="subtitle1">
            FINANCIAL GOALS
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            (1)Layering Chickens. $1,500 <br />
            (2)Borehore for clean water $3,000
            <br />
            (3)Fees for 20 Students. $1,500 <br />
            Total. $6,000 <br />
          </Typography>
          <Typography component="primary" variant="subtitle1">
            PREVIOUS SUPPORT
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Arcadia Community Church is the only Church outside our country
            which has been rendering a support to Shalom Christian Center. This
            Church supported Shalom in farming for the sustainability of the
            ministry and for feeding people during famine. They also supported
            us with tailoring machines for single mothers school of tailoring so
            that they can learn some skills. We used to make communications with
            Steve Tamura who is a Missions Director. His email is
            Steve.tamura@gmail.com If there are some questions about Shalom
            please don’t hesitate to contact me. My email is
            revalfrenyanda@gmail.com
          </Typography>
        </CardContent>
      </Card>
      <Footer />
    </div>
  );
}
