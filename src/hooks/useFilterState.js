import { useState } from "react";
import FILTERS from "../utils/filters";

// 필터 상태를 관리하는 훅
const useFilterState = () => {
  const [filter, setFilter] = useState(FILTERS.ALL);

  return {
    filter,
    setFilter,
  };
};

export default useFilterState;
