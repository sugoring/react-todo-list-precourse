// 할 일 삭제 함수

const deleteTodo = (todos, index) => {
  return todos.filter((_, idx) => idx !== index);
};

export default deleteTodo;
