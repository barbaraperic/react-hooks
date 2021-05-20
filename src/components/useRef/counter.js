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
  const [timer, setTimer] = React.useState(10)
  const [timesClicked, setTimesClicked] = React.useState(0)

  React.useEffect(() => {
    const interval = window.setInterval(() => {
     return setTimer((timer) => timer - 1 )
    }, 1000)

    return () => window.clearTimeout(interval)
  }, [timer])


  return (
    <div className="App">
      <button>Click me</button>
      <p>{timer}</p>
      <p>{timesClicked}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CounterGame />, rootElement);
