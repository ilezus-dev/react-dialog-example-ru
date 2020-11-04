import { StrictMode } from "react";
import ReactDOM from "react-dom";
import WebFontLoader from "webfontloader";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./localization";
import "./css/index.css";

WebFontLoader.load({
  google: {
    families: ["Open Sans:300,400,700"],
  },
});

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
