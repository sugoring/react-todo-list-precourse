import React from "react";

const TodoStats = ({ todos, allTodos, filter }) => {
  const totalTodos = allTodos.length;
  const completedTodos = allTodos.filter((todo) => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  return (
    <div>
      총 할 일 개수: {totalTodos} | 완료된 할 일: {completedTodos} | 진행 중인
      할 일: {activeTodos}
    </div>
  );
};

export default TodoStats;
