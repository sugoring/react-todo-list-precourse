import React from "react";
import TodoContainer from "./components/TodoApp/TodoContainer";

const Main = () => {
  return (
    <div>
      <h1>할 일 목록</h1>
      <p>Enter 키나 추가 버튼을 사용하여 할 일을 목록에 추가하세요.</p>
      <TodoContainer />
    </div>
  );
};

export default Main;
