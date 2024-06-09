import React from "react";
import TodoApp from "./TodoApp";

const TodoContainer = () => {
  return (
    <div>
      <h1>할 일 목록</h1>
      <p>Enter 키나 추가 버튼을 사용하여 할 일을 목록에 추가하세요.</p>
      <TodoApp />
    </div>
  );
};

export default TodoContainer;
