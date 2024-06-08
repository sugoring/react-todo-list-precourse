// src/Main.jsx
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import addTodo from "./todoUtils/addTodo";
import toggleComplete from "./todoUtils/toggleComplete";
import deleteTodo from "./todoUtils/deleteTodo";

const Main = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => addTodo(prevTodos, todo));
  };

  const handleToggleComplete = (index) => {
    setTodos((prevTodos) => toggleComplete(prevTodos, index));
  };

  const handleDeleteTodo = (index) => {
    setTodos((prevTodos) => deleteTodo(prevTodos, index));
  };

  return (
    <div>
      <h1>할 일 목록</h1>
      <p> Enter 키나 추가 버튼을 사용하여 할 일을 목록에 추가하세요.</p>

      {/* 할 일 입력 폼 */}
      <TodoForm addTodo={handleAddTodo} />

      {/* 할 일 목록 표시 */}
      <TodoList
        todos={todos}
        toggleComplete={handleToggleComplete}
        deleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default Main;
