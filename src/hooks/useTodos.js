import useTodosState from "./useTodosState";
import useFilteredTodos from "./useFilteredTodos";
import {
  handleAddTodo,
  handleToggleComplete,
  handleDeleteTodo,
  handleSetFilter,
} from "../todoUtils/todoHandlers";
import FILTERS from "../todoUtils/filters";

const useTodos = () => {
  const { todos, setTodos, filter, setFilter } = useTodosState();
  const filteredTodos = useFilteredTodos(todos, filter);

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
