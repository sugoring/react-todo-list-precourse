const addTodo = (todos, newTodo) => {
  return [...todos, { text: newTodo, completed: false }];
};

export default addTodo;
