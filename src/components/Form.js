import React from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value); // console.log(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    // setTodos(todos.concat(e.target.value))
    // actually should be installing a package to generate the id
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    // setTodos(todos.filter((item) => item.completed === false));
    setStatus(e.target.value);
  };

  const submitNoTextHandler = (e) => {
    e.preventDefault();
    NotificationManager.warning("input your list");
  };

  return (
    <>
      <form>
        <input
          type="text"
          className="todo-input"
          value={inputText}
          onChange={inputTextHandler}
          // required
        />
        <button
          className="todo-button"
          type="submit"
          onClick={(e) =>
            inputText !== "" ? submitTodoHandler(e) : submitNoTextHandler(e)
          }
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo" onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      <NotificationContainer />
    </>
  );
};

export default Form;
