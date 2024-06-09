import React from "react";

const TodoText = ({ text, completed }) => {
  return (
    <span style={{ textDecoration: completed ? "line-through" : "none" }}>
      {text}
    </span>
  );
};

export default TodoText;
