import React from "react";
import NavBar from "../components/NavBar";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import Footer from "./components/Footer";

import "./Layout.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif", "PT Sans", "sans-serif"].join(","),
    fontSize: 16,
  },
});

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        {children}
      </div>
    </ThemeProvider>
  );
}

export default Layout;
