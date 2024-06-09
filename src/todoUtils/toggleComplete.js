/**
 * 할 일 완료 상태를 토글하는 함수
 * @param {Array} todos - 기존 할 일 목록
 * @param {number} index - 완료 상태를 토글할 할 일의 인덱스
 * @returns {Array} 업데이트된 할 일 목록
 */
const toggleComplete = (todos, index) => {
  return todos.map((todo, idx) =>
    idx === index ? { ...todo, completed: !todo.completed } : todo
  );
};

export default toggleComplete;
