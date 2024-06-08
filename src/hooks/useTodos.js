import { useState } from "react";
import addTodo from "../todoUtils/addTodo";
import toggleComplete from "../todoUtils/toggleComplete";
import deleteTodo from "../todoUtils/deleteTodo";

const useTodos = () => {
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

  return {
    todos,
    handleAddTodo,
    handleToggleComplete,
    handleDeleteTodo,
  };
};

export default useTodos;
