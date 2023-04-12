import React, { useRef } from 'react';
import MyInput from './MyInput';

const App = () => {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <MyInput inputRef={inputRef}/>
      <button onClick={focus}>집중</button>
    </div>
  )
}

export default App