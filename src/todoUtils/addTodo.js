// 새로운 할 일을 추가하는 함수
const addTodo = (todos, newTodo) => {
  return [...todos, { text: newTodo, completed: false }];
};

export default addTodo;
