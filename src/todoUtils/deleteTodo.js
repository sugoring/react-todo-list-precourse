const deleteTodo = (todos, index) => {
  return todos.filter((_, idx) => idx !== index);
};

export default deleteTodo;
