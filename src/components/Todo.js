import React from "react";

const Todo = ({ eachTodo, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    // comparing the element that being clicked on to match the one from the state (todos)
    // filtering the todos out and trying to find an element that matches with whatever we clicked on (eachTodo) to get rid of
    // console.log(eachTodo);
    setTodos(todos.filter((item) => item.id !== eachTodo.id));
  };

  const completeHadler = () => {
    setTodos(
      todos.map((item) =>
        item.id === eachTodo.id ? { ...item, completed: !item.completed } : item
      )
    );
    console.log(todos);
  };

  return (
    <div className="todo">
      <li className={`todo-item ${eachTodo.completed ? "completed" : ""}`}>
        {todo}
      </li>
      <button className="complete-btn" onClick={completeHadler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
