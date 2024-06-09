import React from "react";
import TodoForm from "../todoForm/todoForm";
import TodoList from "../todoList/todoList";
import TodoFilter from "../todoFilter/todoFilter";
import TodoStats from "./todoStats";
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
