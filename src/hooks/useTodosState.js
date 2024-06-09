import { useState } from "react";
import FILTERS from "../todoUtils/filters";

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
