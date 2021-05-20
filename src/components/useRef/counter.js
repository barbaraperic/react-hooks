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
  const id = React.useRef(null)

  const clear = () => window.clearInterval(id.current)

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1)
    }, 1000)

    return clear
  }, [])

  React.useEffect(() => {
    if (timer === 0) {
      clear()
    }
  }, [timer])


  const handleClick = () => {
    setTimesClicked((v) => v + 1)
  }

  return (
    <div className="App">
      <p>{timesClicked}</p>
      {timer === 0 ? null : 
        <button onClick={handleClick}>Click me</button>
      }
      <p>Time left: {timer} s</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CounterGame />, rootElement);
