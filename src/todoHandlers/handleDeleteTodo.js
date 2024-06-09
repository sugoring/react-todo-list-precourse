import deleteTodo from "../todoUtils/deleteTodo";

const handleDeleteTodo = (todos, setTodos, index) => {
  setTodos((prevTodos) => deleteTodo(prevTodos, index));
};

export default handleDeleteTodo;
