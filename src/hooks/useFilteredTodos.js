import { useMemo } from "react";
import FILTERS from "../todoUtils/filters";

const useFilteredTodos = (todos, filter) => {
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case FILTERS.ACTIVE:
        return todos.filter((todo) => !todo.completed);
      case FILTERS.COMPLETED:
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  return filteredTodos;
};

export default useFilteredTodos;
