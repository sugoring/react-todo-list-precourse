import preventDefault from "../utils/preventDefault";
import validateInputValue from "../utils/validateInputValue";
import addAndResetTodo from "../utils/addAndResetTodo";

const handleSubmit = (e, inputValue, addTodo, setInputValue) => {
  preventDefault(e);
  if (validateInputValue(inputValue)) {
    addAndResetTodo(inputValue, addTodo, setInputValue);
  }
};

export default handleSubmit;
