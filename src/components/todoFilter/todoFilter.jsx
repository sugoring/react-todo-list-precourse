import React from "react";
import AllFilterButton from "./allFilterButton";
import ActiveFilterButton from "./activeFilterButton";
import CompletedFilterButton from "./completedFilterButton";

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
