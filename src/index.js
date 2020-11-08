import React from "react";
import ReactDOM from "react-dom";
import WebFontLoader from "webfontloader";
import dayjs from "dayjs";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "dayjs/locale/ru";
import "./css/index.css";

WebFontLoader.load({
  google: {
    families: ["Open Sans:300,400,700"],
  },
});

dayjs.locale("ru");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
