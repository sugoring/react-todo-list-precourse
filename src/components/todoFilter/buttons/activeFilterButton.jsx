import React from "react";
import FilterButton from "../filterButton";
import FILTERS from "../../../utils/filters";

const ActiveFilterButton = ({ filter, handleSetFilter }) => {
  return (
    <FilterButton
      isActive={filter === FILTERS.ACTIVE}
      onClick={() => handleSetFilter(FILTERS.ACTIVE)}
    >
      진행 중
    </FilterButton>
  );
};

export default ActiveFilterButton;
