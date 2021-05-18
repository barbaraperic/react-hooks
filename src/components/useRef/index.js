import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  Instructions:
    You're given the UI for a basic form. Your task is to 
    hook it all up using refs. 

    The `Focus X Input` buttons should focus that specific input
    field.

    The `Submit` button should log `name`, `email`, and `password`
    to the console.

    The `Reset` button should result all of the input fields to 
    empty strings.
*/

function Form() {
  const handleSubmit = e => {

  }

  const handleReset = () => {

  }

  return (
    <React.Fragment>
      <label>
        Name:
        <input
          placeholder="name"
          type="text"
        />
      </label>
      <label>
        Email:
        <input
          placeholder="email"
          type="text"
        />
      </label>
      <label>
        Password:
        <input
          placeholder="password"
          type="text"
        />
      </label>

      <hr />

      <button>
        Focus Name Input
      </button>
      <button>
        Focus Email Input
      </button>
      <button>
        Focus Password Input
      </button>

      <hr />

      <button>Submit</button>
      <button>Reset</button>
    </React.Fragment>
  )
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Form />, rootElement);
