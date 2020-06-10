import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  RENTS_COUNT: 312
};

ReactDOM.render(
    <App
      rentsCount = {Settings.RENTS_COUNT}
    />,
    document.querySelector(`#root`)
);
