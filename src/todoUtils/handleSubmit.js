// src/todoUtils/handleSubmit.js
import validateTodo from "./validateTodo";

/**
 * 폼 제출 핸들러 함수
 * @param {Event} event - 폼 제출 이벤트
 * @param {string} todoText - 입력된 할 일 텍스트
 * @param {Function} addTodo - 할 일을 추가하는 함수
 * @param {Function} resetInput - 입력 필드를 초기화하는 함수
 */
const handleSubmit = (event, todoText, addTodo, resetInput) => {
  event.preventDefault();
  if (!validateTodo(todoText)) {
    alert("할 일을 입력하세요.");
    return;
  }
  addTodo(todoText);
  resetInput("");
};

export default handleSubmit;
