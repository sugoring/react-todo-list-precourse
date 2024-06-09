import React from "react";
import TodoFilter from "../todoFilter/todoFilter";

const TodoFilterContainer = ({ useTodos }) => {
  const { filter, FILTERS, handleSetFilter } = useTodos();

  return (
    <TodoFilter
      filter={filter}
      FILTERS={FILTERS}
      handleSetFilter={handleSetFilter}
    />
  );
};

export default TodoFilterContainer;
