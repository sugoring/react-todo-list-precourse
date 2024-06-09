import { useMemo } from "react";
import FILTERS from "../todoUtils/filters";

const useFilteredTodos = (todos, filter) => {
  return useMemo(() => {
    return todos.filter((todo) => {
      if (filter === FILTERS.ACTIVE) return !todo.completed;
      if (filter === FILTERS.COMPLETED) return todo.completed;
      return true;
    });
  }, [todos, filter]);
};

export default useFilteredTodos;
