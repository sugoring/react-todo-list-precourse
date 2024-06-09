import React from "react";
import TodoText from "./TodoText";
import ToggleCompleteButton from "./ToggleCompleteButton";
import DeleteButton from "./DeleteButton";

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
