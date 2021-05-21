import React from 'react';
import { suffixOf, calculatePrime } from './math';

const NthPrime = ({ count, incrementPrime }) => {
  return (
    <>
      <h2>Nth Prime</h2>
      <p>The {suffixOf(count)} prime number is {calculatePrime(count)}</p>
      <button onClick={incrementPrime}>Next</button>
    </>
  )
}

export default React.memo(NthPrime);