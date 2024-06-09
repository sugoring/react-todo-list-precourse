import addTodo from "../todoUtils/addTodo";

const handleAddTodo = (todos, setTodos, todo) => {
  setTodos((prevTodos) => addTodo(prevTodos, todo));
};

export default handleAddTodo;
