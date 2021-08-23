import * as React from "react";
import { render } from "react-dom";

import { Hello } from "./Hello";
 
const App = () => {
  return (
    <div>
      <p>Pagepro best react team in the world</p>
      <Hello compiler="Parcel" framework={123} />
      <div class='icon'></div>
    </div>
  );
};
 
render(<App />, document.getElementById("app"));
