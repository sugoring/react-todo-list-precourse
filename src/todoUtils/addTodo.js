/**
 * 새로운 할 일을 목록에 추가하는 함수
 * @param {Array} todos - 기존 할 일 목록
 * @param {string} newTodo - 새로 추가할 할 일 텍스트
 * @returns {Array} 업데이트된 할 일 목록
 */
const addTodo = (todos, newTodo) => {
  const todo = {
    text: newTodo,
    completed: false,
  };

  return [...todos, todo];
};

export default addTodo;
