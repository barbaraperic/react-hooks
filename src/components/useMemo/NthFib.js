import React from 'react';
import { suffixOf, calculateFib } from "./math"

const NthFib = ({ count, incrementFib }) => {
  return (
    <>
      <h2>NthFib</h2>
      <p>The {suffixOf(count)} number in the fibonacci sequence is {calculateFib(count)}</p>
      <button onClick={incrementFib}>Next</button>
    </>
  )
}

export default React.memo(NthFib);