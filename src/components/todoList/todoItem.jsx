import React from "react";
import TodoText from "./todoText";
import ToggleCompleteButton from "./toggleCompleteButton";
import DeleteButton from "./deleteButton";

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
