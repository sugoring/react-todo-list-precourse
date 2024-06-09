import validateTodo from "../todoUtils/validateTodo";

// 폼 제출을 처리하는 함수
const handleSubmit = (e, inputValue, addTodo, setInputValue) => {
  e.preventDefault();
  if (!validateTodo(inputValue)) {
    alert("할 일을 입력하세요.");
    return;
  }
  addTodo(inputValue);
  setInputValue("");
};

export default handleSubmit;
