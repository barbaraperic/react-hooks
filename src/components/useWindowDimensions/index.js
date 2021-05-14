import React from 'react';

const useWindowDimensions = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const listener = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }

  }, [])

  return {
    width,
    height,
  }
}

const App = () => {
  const { width, height } = useWindowDimensions();
  
  return (
    <div>
      <h2>width: {width}</h2>
      <h2>height: {height}</h2>
      <p>resize the window</p>
    </div>
  )
}

export default App