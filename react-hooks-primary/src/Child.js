import React, { memo } from 'react'

const Child = ({name, age}) => {

  console.log('자녀 컴포넌트 랜더링 되었습니다');
  return (
    <div style={{ border: '2px solid powderblue', padding: '10px' }}>
        <h3>자녀</h3>
        <p>name: {name}</p>
        <p>age : {age}살</p>
    </div>
  )
}

export default memo(Child);