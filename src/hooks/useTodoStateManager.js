import useTodosState from "./useTodosState";
import useFilteredTodos from "./useFilteredTodos";

const useTodoStateManager = () => {
  const { todos, setTodos, filter, setFilter } = useTodosState();
  const filteredTodos = useFilteredTodos(todos, filter);

  return {
    todos: filteredTodos,
    allTodos: todos,
    setTodos,
    filter,
    setFilter,
  };
};

export default useTodoStateManager;
