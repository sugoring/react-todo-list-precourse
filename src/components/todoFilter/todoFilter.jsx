import React from "react";
import AllFilterButton from "./buttons/allFilterButton";
import ActiveFilterButton from "./buttons/activeFilterButton";
import CompletedFilterButton from "./buttons/completedFilterButton";

// 할 일 필터 컴포넌트: 할 일 목록을 필터링하는 버튼들을 포함
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
