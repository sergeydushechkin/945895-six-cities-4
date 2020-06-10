import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {rentsCount} = props;

  return (
    <Main rentsCount={rentsCount}/>
  );
};

export default App;
