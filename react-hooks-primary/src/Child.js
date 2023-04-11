import React, { memo } from 'react'

const Child = ({name, tellMe}) => {

  console.log('자녀 컴포넌트 랜더링 되었습니다');
  return (
    <div style={{ border: '2px solid powderblue', padding: '10px' }}>
        <h3>자녀</h3>
        <p>이름 : {name}</p>
        <button onClick={tellMe}>엄마 나 사랑해?</button>
    </div>
  )
}

export default memo(Child);