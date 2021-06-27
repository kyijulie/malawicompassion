import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { CardContent } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif", "PT Sans", "sans-serif"].join(","),
    fontSize: 16,
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  text: {
    // paddingLeft: "150px",
    // paddingRight: "150px",
    // transform: "rotate(-90deg)",
    width: "100%",
    // padding: "50px",
  },
  content: {
    // backgroundColor: "gray",
    display: "flex",
    flexDirection: "column",
    paddingRight: "150px",
    paddingLeft: "150px",
    paddingTop: "85px",
    paddingBottom: "85px",
  },
}));

function Text({ body }) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.content}>
        <Typography className={classes.text}>About Us</Typography>
        <Typography variant="body2" component="p">
          {body}
        </Typography>
      </div>
    </ThemeProvider>
  );
}

export default Text;
