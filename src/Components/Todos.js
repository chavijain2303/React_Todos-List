import React from 'react';
import TodoItem from "./TodoItem";

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }

  return (
    <>
      <h3 className='text-center my-3 textBold'>ToDos List</h3>
      <div className='container my-3' style={myStyle}>
        <ul className="todo-list">
          {
            props.todos.length === 0 ? 
              <p className="no-todos-message">NO TODO TO DISPLAY</p> : 
              props.todos.map((todo) => {
                return (<TodoItem todo={todo} key={todo.Sno} onDelete={props.onDelete} />)
              })
          }
        </ul>
      </div>
    </>
  )
}

export default Todos;
