import React, {forwardRef} from 'react';

const MyInput = (props, ref) => {
  return (
    <input type="text" ref={ref}/>
  )
};

export default forwardRef(MyInput);