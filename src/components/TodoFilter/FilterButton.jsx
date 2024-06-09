import React from "react";

const FilterButton = ({ isActive, onClick, children }) => {
  return (
    <button onClick={onClick} className={isActive ? "active" : ""}>
      {children}
    </button>
  );
};

export default FilterButton;
