import React from "react";
import AllFilterButton from "./AllFilterButton";
import ActiveFilterButton from "./ActiveFilterButton";
import CompletedFilterButton from "./CompletedFilterButton";

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
