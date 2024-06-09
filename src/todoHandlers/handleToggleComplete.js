import toggleComplete from "../todoUtils/toggleComplete";

const handleToggleComplete = (todos, setTodos, index) => {
  setTodos((prevTodos) => toggleComplete(prevTodos, index));
};

export default handleToggleComplete;
