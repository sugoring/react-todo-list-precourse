// src/main.jsx
import React from "react";
import TodoForm from "./TodoForm.jsx";

const Main = () => {
  return (
    <div>
      <h1>할 일 목록</h1>

      {/* 할 일 입력 폼 */}
      <TodoForm />

      {/* 할 일 목록 표시 */}
      <ul>
        {/* 할 일 항목 */}
        <li>
          <span>예제 할 일 1</span>
          <button>완료</button>
          <button>삭제</button>
        </li>
        <li>
          <span>예제 할 일 2</span>
          <button>완료</button>
          <button>삭제</button>
        </li>
      </ul>
    </div>
  );
};

export default Main;
