import { useMemo } from "react";
import FILTERS from "../todoUtils/filters";

const useFilteredTodos = (todos, filter) => {
  return useMemo(() => {
    switch (filter) {
      case FILTERS.ACTIVE:
        return todos.filter((todo) => !todo.completed);
      case FILTERS.COMPLETED:
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);
};

export default useFilteredTodos;
