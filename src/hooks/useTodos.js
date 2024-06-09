import { useState } from "react";
import addTodo from "../todoUtils/addTodo";
import toggleComplete from "../todoUtils/toggleComplete";
import deleteTodo from "../todoUtils/deleteTodo";

const FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(FILTERS.ALL);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => addTodo(prevTodos, todo));
  };

  const handleToggleComplete = (index) => {
    setTodos((prevTodos) => toggleComplete(prevTodos, index));
  };

  const handleDeleteTodo = (index) => {
    setTodos((prevTodos) => deleteTodo(prevTodos, index));
  };

  const handleSetFilter = (filter) => {
    setFilter(filter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === FILTERS.ACTIVE) return !todo.completed;
    if (filter === FILTERS.COMPLETED) return todo.completed;
    return true;
  });

  return {
    todos: filteredTodos,
    handleAddTodo,
    handleToggleComplete,
    handleDeleteTodo,
    handleSetFilter,
    filter,
    FILTERS,
  };
};

export default useTodos;
