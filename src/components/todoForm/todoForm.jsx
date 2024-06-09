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
