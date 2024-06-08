// 할 일 추가 함수

const addTodo = (todos, newTodo) => {
  return [...todos, { text: newTodo, completed: false }];
};

export default addTodo;
