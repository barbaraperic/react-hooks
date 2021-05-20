import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  Instructions:
    You're building an app to see how many times you can click
    a button in 10 seconds. 

    The UI has three parts, a button, a timer counting down from 10,
    and a count of how many times you've clicked the button.

    Once the timer reaches 0, remove the button from the UI.
*/

function CounterGame () {
  return (
    <div className="App">
      See instructions.
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CounterGame />, rootElement);
