import {
  handleAddTodo,
  handleToggleComplete,
  handleDeleteTodo,
  handleSetFilter,
} from "../todoHandlers";

const useTodoHandlers = (todos, setTodos) => {
  const handleAddTodo = (todo) => handleAddTodo(todos, setTodos, todo);
  const handleToggleComplete = (index) =>
    handleToggleComplete(todos, setTodos, index);
  const handleDeleteTodo = (index) => handleDeleteTodo(todos, setTodos, index);
  const handleSetFilter = (filter) => handleSetFilter(setFilter, filter);

  return {
    handleAddTodo,
    handleToggleComplete,
    handleDeleteTodo,
    handleSetFilter,
  };
};

export default useTodoHandlers;
