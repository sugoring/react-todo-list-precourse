// 폼 제출 핸들러 함수
import validateTodo from "./validateTodo";

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
