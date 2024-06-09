import React from "react";
import TodoApp from "./todoApp";

// 할 일 컨테이너 컴포넌트: 할 일 목록을 표시하고 추가하는 기능을 제공하는 컨테이너
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
