import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import addTodo from "./todoUtils/addTodo";
import toggleComplete from "./todoUtils/toggleComplete";
import deleteTodo from "./todoUtils/deleteTodo";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => addTodo(prevTodos, todo));
  };

  const handleToggleComplete = (index) => {
    setTodos((prevTodos) => toggleComplete(prevTodos, index));
  };

  const handleDeleteTodo = (index) => {
    setTodos((prevTodos) => deleteTodo(prevTodos, index));
  };

  return (
    <div>
      <TodoForm addTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        toggleComplete={handleToggleComplete}
        deleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default TodoContainer;
