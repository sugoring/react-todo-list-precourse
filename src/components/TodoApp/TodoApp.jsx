import React from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import TodoFilter from "../TodoFilter/TodoFilter";
import TodoStats from "./TodoStats";
import useTodos from "../../hooks/useTodos";

const TodoApp = () => {
  const {
    todos,
    allTodos,
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
      <TodoStats todos={todos} allTodos={allTodos} filter={filter} />
    </div>
  );
};

export default TodoApp;
