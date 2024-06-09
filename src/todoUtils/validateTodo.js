/**
 * 할 일 유효성 검사 함수
 * @param {string} todo - 검사할 할 일 텍스트
 * @returns {boolean} 유효한 할 일인지 여부
 */
const validateTodo = (todo) => {
  return todo.trim() !== "";
};

export default validateTodo;
