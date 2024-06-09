// 할 일 입력 폼 컴포넌트: 사용자가 새로운 할 일을 추가할 수 있는 폼
import React, { useState } from "react";
import TodoInput from "./todoInput";
import handleSubmit from "../../handlers/handleSubmit";

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form onSubmit={(e) => handleSubmit(e, inputValue, addTodo, setInputValue)}>
      <TodoInput inputValue={inputValue} setInputValue={setInputValue} />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
