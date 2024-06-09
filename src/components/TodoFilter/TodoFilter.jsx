import React from "react";
import FilterButton from "./FilterButton";
import FILTERS from "../../todoUtils/filters";

const TodoFilter = ({ filter, handleSetFilter }) => {
  return (
    <div>
      <FilterButton
        isActive={filter === FILTERS.ALL}
        onClick={() => handleSetFilter(FILTERS.ALL)}
      >
        전체
      </FilterButton>
      <FilterButton
        isActive={filter === FILTERS.ACTIVE}
        onClick={() => handleSetFilter(FILTERS.ACTIVE)}
      >
        진행 중
      </FilterButton>
      <FilterButton
        isActive={filter === FILTERS.COMPLETED}
        onClick={() => handleSetFilter(FILTERS.COMPLETED)}
      >
        완료
      </FilterButton>
    </div>
  );
};

export default TodoFilter;
