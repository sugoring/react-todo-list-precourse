import React from "react";
import FilterButton from "./FilterButton";
import FILTERS from "../../todoUtils/filters";

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
