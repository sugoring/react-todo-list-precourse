import React from "react";
import TodoStats from "./todoStats";

const TodoStatsContainer = ({ useTodos }) => {
  const { todos, allTodos, filter } = useTodos();

  return <TodoStats todos={todos} allTodos={allTodos} filter={filter} />;
};

export default TodoStatsContainer;
