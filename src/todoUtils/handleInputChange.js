/**
 * Input 값 변경 핸들러 함수
 * @param {Event} event - Input 값 변경 이벤트
 * @param {Function} setInputValue - 입력 필드 값을 설정하는 함수
 */
const handleInputChange = (event, setInputValue) => {
  setInputValue(event.target.value);
};

export default handleInputChange;
