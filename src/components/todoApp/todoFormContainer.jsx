import React from "react";
import TodoForm from "../todoForm/todoForm";

const TodoFormContainer = ({ useTodos }) => {
  const { handleAddTodo } = useTodos();

  return <TodoForm addTodo={handleAddTodo} />;
};

export default TodoFormContainer;
