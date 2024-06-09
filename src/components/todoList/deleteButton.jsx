import React from "react";

const DeleteButton = ({ onDelete }) => {
  return <button onClick={onDelete}>삭제</button>;
};

export default DeleteButton;
