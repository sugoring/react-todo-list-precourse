import React from "react";
import FilterButton from "../filterButton";
import FILTERS from "../../../utils/filters";

const CompletedFilterButton = ({ filter, handleSetFilter }) => {
  return (
    <FilterButton
      isActive={filter === FILTERS.COMPLETED}
      onClick={() => handleSetFilter(FILTERS.COMPLETED)}
    >
      완료
    </FilterButton>
  );
};

export default CompletedFilterButton;
