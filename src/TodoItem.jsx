import React from "react";

const TodoItem = ({ todo, index, toggleComplete, deleteTodo }) => {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <button onClick={() => toggleComplete(index)}>
        {todo.completed ? "미완료" : "완료"}
      </button>
      <button onClick={() => deleteTodo(index)}>삭제</button>
    </li>
  );
};

export default TodoItem;
