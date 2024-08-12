import React from 'react'

const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
        <div className="todo-item">
            <div>
              <input type="checkbox" checked={todo.completed} onChange={() => {}} />
                <h5>{todo.title}</h5>
                <p>{todo.desc}</p>
            </div>
            <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
        </div>
    </>
)
}

export default TodoItem








