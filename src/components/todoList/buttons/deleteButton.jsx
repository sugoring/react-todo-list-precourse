import React from "react";
import "./button.css";

// 삭제 버튼 컴포넌트: 클릭하면 삭제 동작 실행
const DeleteButton = ({ onDelete }) => {
  return (
    <button className="delete-button" onClick={onDelete}>
      X
    </button>
  );
};

export default DeleteButton;
