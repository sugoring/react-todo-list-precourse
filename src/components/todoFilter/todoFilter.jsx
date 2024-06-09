import React from "react";
import AllFilterButton from "./buttons/allFilterButton";
import ActiveFilterButton from "./buttons/activeFilterButton";
import CompletedFilterButton from "./buttons/completedFilterButton";

const TodoFilter = ({ filter, handleSetFilter }) => {
  return (
    <div>
      <AllFilterButton filter={filter} handleSetFilter={handleSetFilter} />
      <ActiveFilterButton filter={filter} handleSetFilter={handleSetFilter} />
      <CompletedFilterButton
        filter={filter}
        handleSetFilter={handleSetFilter}
      />
    </div>
  );
};

export default TodoFilter;
