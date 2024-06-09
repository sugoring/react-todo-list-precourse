import React from "react";

const TodoFilter = ({ filter, FILTERS, handleSetFilter }) => {
  return (
    <div>
      <button
        onClick={() => handleSetFilter(FILTERS.ALL)}
        className={filter === FILTERS.ALL ? "active" : ""}
      >
        전체
      </button>
      <button
        onClick={() => handleSetFilter(FILTERS.ACTIVE)}
        className={filter === FILTERS.ACTIVE ? "active" : ""}
      >
        진행 중
      </button>
      <button
        onClick={() => handleSetFilter(FILTERS.COMPLETED)}
        className={filter === FILTERS.COMPLETED ? "active" : ""}
      >
        완료
      </button>
    </div>
  );
};

export default TodoFilter;
