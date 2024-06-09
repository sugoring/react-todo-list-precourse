import toggleComplete from "../utils/toggleComplete";

// 할 일의 완료 상태를 토글하는 함수
const handleToggleComplete = (todos, setTodos, index) => {
  setTodos((prevTodos) => toggleComplete(prevTodos, index));
};

export default handleToggleComplete;
