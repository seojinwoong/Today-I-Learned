import React, { useState, useEffect, useRef } from 'react'

const App = () => {
  const [count, setCount] = useState(1);
  const renderCountRef = useRef(0);

  useEffect(() => {
    // 화면이 렌더링되는 횟수를 구할떄 useRef를 활용하면 된다.
    renderCountRef.current = renderCountRef.current + 1; 
    console.log('렌더링 수 : ', renderCountRef.current);
  });

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  )
}

export default App