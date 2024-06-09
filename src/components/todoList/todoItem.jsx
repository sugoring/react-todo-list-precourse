import React from "react";
import TodoText from "./todoText";
import ToggleCompleteButton from "./buttons/toggleCompleteButton";
import DeleteButton from "./buttons/deleteButton";

// 할 일 아이템 컴포넌트: 할 일의 텍스트, 완료 토글 버튼, 삭제 버튼을 포함
const TodoItem = ({ todo, index, toggleComplete, deleteTodo }) => {
  return (
    <li>
      <TodoText text={todo.text} completed={todo.completed} />
      <ToggleCompleteButton
        completed={todo.completed}
        onToggle={() => toggleComplete(index)}
      />
      <DeleteButton onDelete={() => deleteTodo(index)} />
    </li>
  );
};

export default TodoItem;
