import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import About from './Components/About';
import AddTodo from "./Components/AddTodo";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  const [search, setSearch] = useState("");

  const onDelete = (todo) => {
    console.log("Deleting todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("Adding this todo", title, desc);

    let Sno;
    if (todos.length === 0) {
      Sno = 0;
    } else {
      Sno = todos[todos.length - 1].Sno + 1;
    }

    const myTodo = {
      Sno: Sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Since we are already filtering in the render, no need to handle anything here
  }

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Router>
        <Header title="ToDos List" searchBar={true} onSearchChange={handleSearchChange} onSearchSubmit={handleSearchSubmit} />

        <Routes>
          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={filteredTodos} onDelete={onDelete} />
            </>
          } />
          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
