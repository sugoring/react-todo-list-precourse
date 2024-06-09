import { useState } from "react";
import FILTERS from "../todoUtils/filters";

// 할 일 목록과 필터 상태를 관리하는 훅
const useTodosState = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(FILTERS.ALL);

  return {
    todos,
    setTodos,
    filter,
    setFilter,
  };
};

export default useTodosState;
