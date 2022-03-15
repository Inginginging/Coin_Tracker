import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";

//theme 객체
const darkTheme = {
  textColor: "whitesmoke",
  bgColor: "#111",
};
const lightTheme = {
  textColor: "#111",
  bgColor: "whitesmoke",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
