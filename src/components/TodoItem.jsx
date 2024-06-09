import React from "react";

// 개별 할 일 항목을 표시하는 컴포넌트
const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <button onClick={() => toggleComplete(todo.id)}>
        {todo.completed ? "미완료" : "완료"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
