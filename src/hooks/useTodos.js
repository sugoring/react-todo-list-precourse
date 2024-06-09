import useTodoStateManager from "./useTodoStateManager";
import useTodoHandlers from "./useTodoHandlers";
import useLoadTodos from "./useLoadTodos";
import useSaveTodos from "./useSaveTodos";
import FILTERS from "../utils/filters";

// 모든 상태와 핸들러를 결합하는 훅
const useTodos = () => {
  const { todos, allTodos, setTodos, filter, setFilter } =
    useTodoStateManager();
  const handlers = useTodoHandlers(allTodos, setTodos, setFilter);

  useLoadTodos(setTodos, setFilter);
  useSaveTodos(allTodos, filter);

  return {
    todos,
    allTodos,
    filter,
    FILTERS,
    ...handlers,
  };
};

export default useTodos;
