import { useMemo } from "react";
import FILTERS from "../todoUtils/filters";

// 필터를 적용하여 할 일 목록을 반환하는 훅
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
