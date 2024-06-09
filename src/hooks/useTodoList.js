import { useState } from "react";

// 할 일 목록 상태를 관리하는 훅
const useTodoList = () => {
  const [todos, setTodos] = useState([]);

  return {
    todos,
    setTodos,
  };
};

export default useTodoList;
