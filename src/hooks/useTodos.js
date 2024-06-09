import useTodosState from "./useTodosState";
import useFilteredTodos from "./useFilteredTodos";
import FILTERS from "../todoUtils/filters";
import {
  handleAddTodo,
  handleToggleComplete,
  handleDeleteTodo,
  handleSetFilter,
} from "../todoUtils/todoHandlers";

const useTodos = () => {
  const { todos, setTodos, filter, setFilter } = useTodosState();
  const filteredTodos = useFilteredTodos(todos, filter);

  return {
    todos: filteredTodos,
    addTodo: (todo) => handleAddTodo(todos, setTodos, todo),
    toggleComplete: (index) => handleToggleComplete(todos, setTodos, index),
    deleteTodo: (index) => handleDeleteTodo(todos, setTodos, index),
    setFilter: (filter) => handleSetFilter(setFilter, filter),
    filter,
    FILTERS,
  };
};

export default useTodos;
