import useTodosState from "./useTodosState";
import useFilteredTodos from "./useFilteredTodos";

// 필터링된 할 일 목록과 관련된 상태를 관리하는 훅
const useFilteredTodosState = () => {
  const { todos, setTodos, filter, setFilter } = useTodosState();
  const filteredTodos = useFilteredTodos(todos, filter);

  return {
    todos: filteredTodos,
    allTodos: todos,
    setTodos,
    filter,
    setFilter,
  };
};

export default useFilteredTodosState;
