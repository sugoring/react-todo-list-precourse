// 할 일 입력 컴포넌트: 사용자가 할 일을 입력하는 입력 필드
import React from "react";
import setInputValueHandler from "../../handlers/setInputValueHandler";

const TodoInput = ({ inputValue, setInputValue }) => {
  return (
    <input
      type="text"
      placeholder="할 일을 입력하세요"
      value={inputValue}
      onChange={(e) => setInputValueHandler(e, setInputValue)}
    />
  );
};

export default TodoInput;
