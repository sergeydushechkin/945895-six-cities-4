import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";

const Settings = {
  RENTS_COUNT: 312
};

// const CARDS_NAMES = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`];

ReactDOM.render(
    <App
      rentsCount = {Settings.RENTS_COUNT}
      offers = {offers}
    />,
    document.querySelector(`#root`)
);
