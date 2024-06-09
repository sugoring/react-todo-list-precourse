import React from "react";
import TotalTodos from "./todoStats/totalTodos";
import CompletedTodos from "./todoStats/completedTodos";
import ActiveTodos from "./todoStats/activeTodos";

const TodoStats = ({ todos, allTodos }) => {
  const totalTodos = allTodos.length;
  const completedTodos = allTodos.filter((todo) => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  return (
    <div>
      <TotalTodos total={totalTodos} /> |{" "}
      <CompletedTodos completed={completedTodos} /> |{" "}
      <ActiveTodos active={activeTodos} />
    </div>
  );
};

export default TodoStats;
