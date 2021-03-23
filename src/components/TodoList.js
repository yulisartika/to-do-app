import React from "react";

import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/* {todos.concat(<Todo />)} */}
        {filteredTodos.map((item) => (
          <Todo
            eachTodo={item} // each todo with all the details here (text, id, complete)
            key={item.id}
            todo={item.text}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
