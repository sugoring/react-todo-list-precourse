import { useEffect } from "react";
import FILTERS from "../utils/filters";

const useLoadTodos = (setTodos, setFilter) => {
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
    const storedFilter = localStorage.getItem("filter") || FILTERS.ALL;
    setFilter(storedFilter);
  }, [setTodos, setFilter]);
};

export default useLoadTodos;
