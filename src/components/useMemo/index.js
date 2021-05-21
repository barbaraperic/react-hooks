import React from 'react';
import NthFib from "./NthFib";
import NthPrime from "./NthPrime";

const App = () => {
  const [fibCount, setFibCount] = React.useState(1);
  const [primeCount, setPrimeCount] = React.useState(1);

  const add10 = () => {
    setFibCount((c) => c + 10)
    setPrimeCount((c) => c + 10)
  }

  const handleReset = () => {
    setFibCount(1);
    setPrimeCount(1);
  }

  const incrementFib = React.useCallback(() => {
    setFibCount((c) => c + 1) 
  }, [])


  const incrementPrime = React.useCallback(() => {
    setPrimeCount((c) => c + 1)
  }, [])

  return (
    <>
      <button onClick={add10}>Add 10</button>
      <button onClick={handleReset}>Reset</button>
      <hr />
      <NthFib count={fibCount} incrementFib={incrementFib}/>
      <NthPrime count={primeCount} incrementPrime={incrementPrime}/>
    </>
  )
}

export default App;