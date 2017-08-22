import React from "react";
import ReactDOM from "react-dom";
import { LocaleProvider } from "antd";
import enUS from "antd/lib/locale-provider/en_US";
import App from "./containers/App";

ReactDOM.render(
  <LocaleProvider locale={enUS}>
    <App />
  </LocaleProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./containers/App", () => {
    const NextApp = require("./containers/App").default;
    ReactDOM.render(
      <LocaleProvider locale={enUS}>
        <NextApp />
      </LocaleProvider>,
      document.getElementById("root")
    );
  });
}
