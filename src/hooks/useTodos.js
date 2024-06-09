import { useEffect } from "react";
import useTodoStateManager from "./useTodoStateManager";
import useTodoHandlers from "./useTodoHandlers";
import FILTERS from "../todoUtils/filters";

// 모든 상태와 핸들러를 결합하는 훅
const useTodos = () => {
  const { todos, allTodos, setTodos, filter, setFilter } =
    useTodoStateManager();
  const handlers = useTodoHandlers(allTodos, setTodos, setFilter);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, [setTodos]);

  return {
    todos,
    allTodos,
    filter,
    FILTERS,
    ...handlers,
  };
};

export default useTodos;
