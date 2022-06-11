import React from 'react'

const AddTodos = (props) => {

  return (
    <div>
      <button type="button" onClick={() => {
        props.onSelect(props.id)
      }}>Delete</button>
      <li>{props.text}</li>
    </div>
  )
}

export default AddTodos