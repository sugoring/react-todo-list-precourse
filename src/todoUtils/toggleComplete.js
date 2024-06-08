// 할 일 완료 상태를 토글하는 함수
const toggleComplete = (todos, index) => {
  return todos.map((todo, idx) =>
    idx === index ? { ...todo, completed: !todo.completed } : todo
  );
};

export default toggleComplete;
