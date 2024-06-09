import React from "react";
import TodoList from "../todoList/todoList";

const TodoListContainer = ({ useTodos }) => {
  const { todos, handleToggleComplete, handleDeleteTodo } = useTodos();

  return (
    <TodoList
      todos={todos}
      toggleComplete={handleToggleComplete}
      deleteTodo={handleDeleteTodo}
    />
  );
};

export default TodoListContainer;
