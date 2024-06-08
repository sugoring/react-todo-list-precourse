// src/main.jsx
import React from "react";

const Main = () => {
  return (
    <div>
      <h1>할 일 목록</h1>

      {/* 할 일 입력 폼 */}
      <form>
        <input type="text" placeholder="할 일을 입력하세요" />
        <button type="submit">추가</button>
      </form>

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
