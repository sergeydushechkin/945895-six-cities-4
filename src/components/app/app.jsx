import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {rentsCount, cardsNames} = props;

  return (
    <Main
      rentsCount={rentsCount}
      cardsNames = {cardsNames}
    />
  );
};

export default App;
