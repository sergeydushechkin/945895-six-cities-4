import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  RENTS_COUNT: 312
};

const CARDS_NAMES = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`];

ReactDOM.render(
    <App
      rentsCount = {Settings.RENTS_COUNT}
      cardsNames = {CARDS_NAMES}
    />,
    document.querySelector(`#root`)
);
