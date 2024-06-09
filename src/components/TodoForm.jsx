import React, { useState } from "react";
import handleInputChange from "../todoUtils/handleInputChange";
import handleSubmit from "../todoUtils/handleSubmit";

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form onSubmit={(e) => handleSubmit(e, inputValue, addTodo, setInputValue)}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={inputValue}
        onChange={(e) => handleInputChange(e, setInputValue)}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
