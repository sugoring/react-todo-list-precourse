import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
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
      <div>
        <button
          onClick={() => handleSetFilter(FILTERS.ALL)}
          className={filter === FILTERS.ALL ? "active" : ""}
        >
          전체
        </button>
        <button
          onClick={() => handleSetFilter(FILTERS.ACTIVE)}
          className={filter === FILTERS.ACTIVE ? "active" : ""}
        >
          진행 중
        </button>
        <button
          onClick={() => handleSetFilter(FILTERS.COMPLETED)}
          className={filter === FILTERS.COMPLETED ? "active" : ""}
        >
          완료
        </button>
      </div>
      <TodoList
        todos={todos}
        toggleComplete={handleToggleComplete}
        deleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default TodoContainer;
