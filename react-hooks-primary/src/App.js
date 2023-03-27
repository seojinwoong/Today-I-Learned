import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  }

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  // 렌더링마다 매번 실행됨 
  useEffect(() => {
    console.log('렌더링')
  });

  // 마운트 될때 + [name] 변경될때만 실행
  useEffect(() => {
    console.log('name이 변화')
  }, [name]);

  // 마운트 될때 + [count] 변경될때만 실행
  useEffect(() => {
    console.log('count가 변화')
  }, [count]);

  // 마운트 될때만 처음에만 실행
  useEffect(() => {
    console.log('마운팅');
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>update</button>
      <span>count : {count}</span>
      <input type="text" value={name} onChange={handleInputChange}/>
      <span>name: {name}</span>
    </div>
  )
}

export default App