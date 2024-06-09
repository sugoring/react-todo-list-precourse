import React from "react";
import handleInputChange from "../../todoHandlers/handleInputChange";

const TodoInput = ({ inputValue, setInputValue }) => {
  return (
    <input
      type="text"
      placeholder="할 일을 입력하세요"
      value={inputValue}
      onChange={(e) => handleInputChange(e, setInputValue)}
    />
  );
};

export default TodoInput;
