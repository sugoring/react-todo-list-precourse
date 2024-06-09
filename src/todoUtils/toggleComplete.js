const toggleComplete = (todos, index) => {
  return todos.map((todo, idx) =>
    idx === index ? { ...todo, completed: !todo.completed } : todo
  );
};

export default toggleComplete;
