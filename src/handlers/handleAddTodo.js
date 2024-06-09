import addTodo from "../utils/addTodo";

// 새로운 할 일을 추가하는 함수
const handleAddTodo = (todos, setTodos, todo) => {
  setTodos((prevTodos) => addTodo(prevTodos, todo));
};

export default handleAddTodo;
