import addTodo from "./addTodo";
import toggleComplete from "./toggleComplete";
import deleteTodo from "./deleteTodo";

export const handleAddTodo = (todos, setTodos, todo) => {
  setTodos((prevTodos) => addTodo(prevTodos, todo));
};

export const handleToggleComplete = (todos, setTodos, index) => {
  setTodos((prevTodos) => toggleComplete(prevTodos, index));
};

export const handleDeleteTodo = (todos, setTodos, index) => {
  setTodos((prevTodos) => deleteTodo(prevTodos, index));
};

export const handleSetFilter = (setFilter, filter) => {
  setFilter(filter);
};
