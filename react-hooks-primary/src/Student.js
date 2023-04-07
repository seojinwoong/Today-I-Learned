import React from 'react'

const Student = ({name, dispatch, id, isHere}) => {
  return (
    <div>
        <span
            onClick={() => {
                dispatch({type: 'mark-student', payload: {id}})
            }}
            style={{ textDecoration: isHere ? 'line-through' : 'none', color: isHere ? 'gray': 'black'}}
        >{name}</span>
        <button onClick={() => {
            dispatch({type: 'delete-student', payload: {id}})
        }}>삭제</button>
    </div>
  )
}

export default Student