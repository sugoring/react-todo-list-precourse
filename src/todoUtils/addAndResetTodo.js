const addAndResetTodo = (inputValue, addTodo, setInputValue) => {
  addTodo(inputValue);
  setInputValue("");
};

export default addAndResetTodo;
