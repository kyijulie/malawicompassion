import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import SEO from "../components/SEO";
import {
  PASTOR_ALFRED_VIDEO,
  PASTOR_KENNETH_VIDEO,
  PASTOR_KENNETH_CERT_1,
  PASTOR_KENNETH_CERT_2,
  LEADERS_BANNER,
} from "../static/dropbox";
import VideoViewCard from "../components/VideoViewCard";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  banner: {
    width: "100%",
    height: "100%",
    overflowY: "hidden",
    paddingBottom: "50px",
  },
}));

function pastorKenneth() {
  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        Pastor Alemekezeke Kenneth Chikondi Phiri
      </Typography>
      <CardMedia component="img" height="600" image={PASTOR_KENNETH_CERT_1} />
      <br />
      <CardMedia component="img" height="600" image={PASTOR_KENNETH_CERT_2} />
    </CardContent>
  );
}

function pastorAlfred() {
  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        Pastor Alfred Dickinson Kasiya Nyanda
      </Typography>
      <Typography component="primary" variant="subtitle1">
        ACADEMIC QUALIFICATIONS:{" "}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        (1) Primary School: 1984-1995 Mataka School.passing Primary School
        Certificate <br /> (2) High School: 1995-1996 Magwero Community
        Secondary School passing Malawi Junior Certificate of Education
        1997-1999 Robert Blake Secondary School qualified for the award of
        Malawi School Certificate of Education
      </Typography>
      <Typography component="primary" variant="subtitle1">
        PROFESSIONAL QUALIFICATIONS:
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        (1) 2016-2018: Masters Degree in Theological Studies at International
        Theological Seminary, California, USA <br />
        (2) 2013-2015: Banchelors of Divinity at Zomba Theological College,
        Malawi <br /> (3) 2006-2008: Diploma in Theology at Zomba Theological
        College, Malawi <br /> (4) 2007-2008: Applied Theology Certificate at
        Josophat Mwale Theological Institute. Lilongwe, Malawi <br /> (5)
        2005-2007: Licentiate Certificate of Theology at Zomba Theological
        College. Malawi (6)2000-2002: National Trade Testing Certificate for
        Carpentry and Joinery Grade II at Mtendere Technical College, Dedza.
        Malawi.
      </Typography>
      <Typography component="primary" variant="subtitle1">
        SHORT COURSES:
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        (1) Facilitator Training Course Certificate at Veritas College,
        Lilongwe. Malawi <br /> (2) Homiletics I Course at Logos Ministries,
        Lilongwe. Malawi
      </Typography>
      <Typography component="primary" variant="subtitle1">
        WORK EXPERIENCE:
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        (A) CURRENT EXPERIENCE &POSITIONS <br />
        (1) Ordination on September 20,2008 at Nsalu CCAP, Malawi <br />
        (2) 2008-2011: Served as a Pastor of Nsalu CCAP <br />
        (3) 2011-2014: Served as a Senior Pastor at Dowa CCAP <br />
        (4) 2014-2016: Served as a Senior Pastor at Msalura CCAP <br />
        (5) 2018 to date: Serving at Mchemani CCAP as a Senior Pastor <br />
        (6) 2013 to date: Serving as a Director and Administrator at Shalom
        Christian Center <br />
        (7) 2019 to date: Serving as a Presbytery Clerk <br />
        (8) 2013-2015: Served as the Vice Moderator of the Presbyterian Church
        in Malawi <br />
        (B) PREVIOUS EXPERIENCE <br />
        2000-2002: worked as a Carpenter at Malawi Lake Service Company
        <br />
        2003-2004: worked as a Temporary Secondary School Teacher at Pride
        Secondary School
      </Typography>
    </CardContent>
  );
}

const leaders = [
  {
    videoFile: PASTOR_KENNETH_VIDEO,
    cardContent: pastorKenneth(),
  },
  {
    videoFile: PASTOR_ALFRED_VIDEO,
    cardContent: pastorAlfred(),
  },
];

export default function MinistryLeaders() {
  const classes = useStyles();

  return (
    <div>
      <SEO title="Ministry Leaders" />
      <img className={classes.banner} src={LEADERS_BANNER} />

      <div className={classes.root}>
        {leaders.map((props) => (
          <VideoViewCard {...props} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
