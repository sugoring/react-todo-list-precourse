import useTodosState from "./useTodosState";
import useFilteredTodos from "./useFilteredTodos";
import useTodoHandlers from "./useTodoHandlers";
import FILTERS from "../todoUtils/filters";

const useTodos = () => {
  const { todos, setTodos, filter, setFilter } = useTodosState();
  const filteredTodos = useFilteredTodos(todos, filter);
  const {
    handleAddTodo,
    handleToggleComplete,
    handleDeleteTodo,
    handleSetFilter,
  } = useTodoHandlers(todos, setTodos);

  return {
    todos: filteredTodos,
    allTodos: todos,
    handleAddTodo,
    handleToggleComplete,
    handleDeleteTodo,
    handleSetFilter,
    filter,
    FILTERS,
  };
};

export default useTodos;
