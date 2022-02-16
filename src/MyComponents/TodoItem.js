import React from 'react'

const TodoItem = ({todo, OnDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{OnDelete(todo)}}>Delete</button>
    </div>
  )
}

export default TodoItem
