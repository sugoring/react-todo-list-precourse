import deleteTodo from "../utils/deleteTodo";

// 할 일을 삭제하는 함수
const handleDeleteTodo = (todos, setTodos, index) => {
  setTodos((prevTodos) => deleteTodo(prevTodos, index));
};

export default handleDeleteTodo;
