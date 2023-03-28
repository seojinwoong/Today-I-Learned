import React, { useState, useRef } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log('렌더링');

  const increaseCountSate = () => {
    setCount(count + 1);
  }
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log('Ref: ', countRef.current);
  }

  return (
    <div>
        <p>state: {count}</p>
        <p>ref: {countRef.current}</p>
        <button onClick={increaseCountSate}>State 올려</button>
        <button onClick={increaseCountRef}>ref 올려</button>
        
    </div>
  )
}

export default App