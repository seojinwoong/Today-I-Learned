import React from 'react';

const MyInput = ({inputRef}) => {
  return (
    <input type="text" ref={inputRef}/>
  )
};

export default MyInput;