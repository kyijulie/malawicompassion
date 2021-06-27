import React from "react";
import NavBar from "../components/NavBar";
// import Home from "./containers/Home";
// import About from "./containers/About";
// import MinistryLeaders from "./containers/MinistryLeaders";
// import News from "./containers/News";
// import Donate from "./containers/Donate";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import * as dotenv from "dotenv";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import Footer from "./components/Footer";
// dotenv.config();
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif", "PT Sans", "sans-serif"].join(","),
    fontSize: 16,
  },
});

// import "./Layout.css";

function App({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Router> */}
        <NavBar />
        {children}
        {/* <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/ministry-leaders" component={MinistryLeaders} />
            <Route path="/news" component={News} />
            <Route path="/donate" component={Donate} />
          </Switch> */}
        {/* <Footer /> */}
        {/* </Router> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
