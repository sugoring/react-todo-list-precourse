import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import useTodos from "../hooks/useTodos";

const TodoContainer = () => {
  const {
    todos,
    handleAddTodo,
    handleToggleComplete,
    handleDeleteTodo,
    handleSetFilter,
    filter,
    FILTERS,
  } = useTodos();

  return (
    <div>
      <TodoForm addTodo={handleAddTodo} />
      <TodoFilter
        filter={filter}
        FILTERS={FILTERS}
        handleSetFilter={handleSetFilter}
      />
      <TodoList
        todos={todos}
        toggleComplete={handleToggleComplete}
        deleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default TodoContainer;
