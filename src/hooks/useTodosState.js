import useTodoList from "./useTodoList";
import useFilterState from "./useFilterState";

// 할 일 목록과 필터 상태를 관리하는 훅
const useTodosState = () => {
  const { todos, setTodos } = useTodoList();
  const { filter, setFilter } = useFilterState();

  return {
    todos,
    setTodos,
    filter,
    setFilter,
  };
};

export default useTodosState;
