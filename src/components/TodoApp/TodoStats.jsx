import React from "react";

const TodoStats = ({ todos, allTodos, filter }) => {
  const totalTodos = allTodos.length;
  const completedTodos = allTodos.filter((todo) => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  // 현재 필터에 따른 할 일 개수 계산
  const filteredCount = () => {
    switch (filter) {
      case "active":
        return allTodos.filter((todo) => !todo.completed).length;
      case "completed":
        return allTodos.filter((todo) => todo.completed).length;
      default:
        return totalTodos;
    }
  };

  return (
    <div>
      총 할 일 개수: {totalTodos} | 완료된 할 일: {completedTodos} | 진행 중인
      할 일: {activeTodos} | 현재 필터에 따른 할 일 개수: {filteredCount()}
    </div>
  );
};

export default TodoStats;
