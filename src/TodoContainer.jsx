import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodos from "./hooks/useTodos";

const TodoContainer = () => {
  const { todos, handleAddTodo, handleToggleComplete, handleDeleteTodo } =
    useTodos();

  return (
    <div>
      <TodoForm addTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        toggleComplete={handleToggleComplete}
        deleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default TodoContainer;
