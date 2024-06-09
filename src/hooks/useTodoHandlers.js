import {
  handleAddTodo,
  handleToggleComplete,
  handleDeleteTodo,
  handleSetFilter,
} from "../handlers";

const useTodoHandlers = (todos, setTodos, setFilter) => {
  return {
    handleAddTodo: (todo) => handleAddTodo(todos, setTodos, todo),
    handleToggleComplete: (index) =>
      handleToggleComplete(todos, setTodos, index),
    handleDeleteTodo: (index) => handleDeleteTodo(todos, setTodos, index),
    handleSetFilter: (filter) => handleSetFilter(setFilter, filter),
  };
};

export default useTodoHandlers;
