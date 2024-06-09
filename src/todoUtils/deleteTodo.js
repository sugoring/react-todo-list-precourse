/**
 * 할 일을 삭제하는 함수
 * @param {Array} todos - 기존 할 일 목록
 * @param {number} index - 삭제할 할 일의 인덱스
 * @returns {Array} 업데이트된 할 일 목록
 */
const deleteTodo = (todos, index) => {
  return todos.filter((_, idx) => idx !== index);
};

export default deleteTodo;
