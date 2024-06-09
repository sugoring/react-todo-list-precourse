import preventDefault from "../todoUtils/preventDefault";
import validateInputValue from "../todoUtils/validateInputValue";
import addAndResetTodo from "../todoUtils/addAndResetTodo";

const handleSubmit = (e, inputValue, addTodo, setInputValue) => {
  preventDefault(e);
  if (validateInputValue(inputValue)) {
    addAndResetTodo(inputValue, addTodo, setInputValue);
  }
};

export default handleSubmit;
