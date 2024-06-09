import validateTodo from "./validateTodo";

const validateInputValue = (inputValue) => {
  if (!validateTodo(inputValue)) {
    alert("할 일을 입력하세요.");
    return false;
  }
  return true;
};

export default validateInputValue;
