import React from "react";
import TodoForm from "../todoForm/todoForm";
import TodoList from "../todoList/todoList";
import TodoFilter from "../todoFilter/todoFilter";
import TodoStats from "./todoStats";
import useTodos from "../../hooks/todos/useTodos";

// 할 일 앱 컴포넌트: 할 일 입력 폼, 할 일 필터, 할 일 목록, 할 일 통계를 표시하는 앱
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
