import React, { useState, useEffect } from "react";
import "react-notifications/lib/notifications.css";

import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // run once when the app starts, no dependency
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((item) => item.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((item) => item.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    // save todo list to localStorage
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };

    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const getLocalTodos = () => {
    localStorage.getItem("todos") === null
      ? localStorage.setItem("todos", JSON.stringify([]))
      : setTodos(JSON.parse(localStorage.getItem("todos")));
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
