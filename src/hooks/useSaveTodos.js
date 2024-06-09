import { useEffect } from "react";

const useSaveTodos = (allTodos, filter) => {
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]);

  useEffect(() => {
    localStorage.setItem("filter", filter);
  }, [filter]);
};

export default useSaveTodos;
