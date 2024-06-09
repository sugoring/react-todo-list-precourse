import useTodoStateManager from "./useTodoStateManager";
import useTodoHandlers from "./useTodoHandlers";
import FILTERS from "../todoUtils/filters";

const useTodos = () => {
  const { todos, allTodos, setTodos, filter, setFilter } =
    useTodoStateManager();
  const handlers = useTodoHandlers(allTodos, setTodos, setFilter);

  return {
    todos,
    allTodos,
    filter,
    FILTERS,
    ...handlers,
  };
};

export default useTodos;
