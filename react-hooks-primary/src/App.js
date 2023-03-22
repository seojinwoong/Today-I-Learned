import React, { useState } from 'react';

const heavyWork = () => {
  console.log('엄청 무거운 작업');
  return ['홍길동', '홍길순', '고길동'];
}

const App = () => {
  const [names, setNames] = useState(() => heavyWork());
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleUpload = () => {
    setNames(prev => [input, ...prev]);
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleInput}/>      
      <button onClick={handleUpload}>Upload</button>
      {
        names.map((name, idx) => {
          return <p key={idx}>{name}</p>
        })
      }
    </div>
  )
}

export default App