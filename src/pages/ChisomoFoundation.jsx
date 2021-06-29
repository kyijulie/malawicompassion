import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import SEO from "../components/SEO";
import { CHISOMO_BANNER } from "../static/dropbox";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "column",
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
    margin: "100px",
  },
  banner: {
    width: "100%",
    height: "100%",
    overflowY: "hidden",
    paddingBottom: "50px",
  },
}));

export default function ChisomoFoundation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SEO title="Chisomo Foundation" />
      <img className={classes.banner} src={CHISOMO_BANNER} />
      <Card className={classes.card}>
        <iframe
          src="https://onedrive.live.com/embed?cid=0A4D6BD123CF8167&amp;resid=A4D6BD123CF8167%21427&amp;authkey=AKoXfBQ42jfiWV4&amp;em=2&amp;wdAr=1.3333333333333333"
          width="1026px"
          height="793px"
          frameborder="0"
        >
          This is an embedded{" "}
          <a target="_blank" href="https://office.com">
            Microsoft Office
          </a>{" "}
          presentation, powered by{" "}
          <a target="_blank" href="https://office.com/webapps">
            Office
          </a>
          .
        </iframe>
      </Card>
      <Footer />
    </div>
  );
}
