import { useState } from "react";
import FILTERS from "../todoUtils/filters";
import {
  handleAddTodo,
  handleToggleComplete,
  handleDeleteTodo,
  handleSetFilter,
} from "../todoUtils/todoHandlers";

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(FILTERS.ALL);

  const filteredTodos = todos.filter((todo) => {
    if (filter === FILTERS.ACTIVE) return !todo.completed;
    if (filter === FILTERS.COMPLETED) return todo.completed;
    return true;
  });

  return {
    todos: filteredTodos,
    handleAddTodo: (todo) => handleAddTodo(todos, setTodos, todo),
    handleToggleComplete: (index) =>
      handleToggleComplete(todos, setTodos, index),
    handleDeleteTodo: (index) => handleDeleteTodo(todos, setTodos, index),
    handleSetFilter: (filter) => handleSetFilter(setFilter, filter),
    filter,
    FILTERS,
  };
};

export default useTodos;
