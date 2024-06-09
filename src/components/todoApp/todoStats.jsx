import React from "react";
import TotalTodos from "./stats/totalTodos";
import CompletedTodos from "./stats/completedTodos";
import ActiveTodos from "./stats/activeTodos";

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
