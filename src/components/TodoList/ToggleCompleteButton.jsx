import React from "react";

const ToggleCompleteButton = ({ completed, onToggle }) => {
  return <button onClick={onToggle}>{completed ? "미완료" : "완료"}</button>;
};

export default ToggleCompleteButton;
