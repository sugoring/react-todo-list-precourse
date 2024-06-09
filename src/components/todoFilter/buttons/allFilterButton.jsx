import React from "react";
import FilterButton from "../filterButton";
import FILTERS from "../../../utils/filters";

const AllFilterButton = ({ filter, handleSetFilter }) => {
  return (
    <FilterButton
      isActive={filter === FILTERS.ALL}
      onClick={() => handleSetFilter(FILTERS.ALL)}
    >
      전체
    </FilterButton>
  );
};

export default AllFilterButton;
