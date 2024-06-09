import useTodosState from "./useTodosState";
import useFilteredTodos from "./useFilteredTodos";
import {
  handleAddTodo,
  handleToggleComplete,
  handleDeleteTodo,
  handleSetFilter,
} from "../todoHandlers/index";
import FILTERS from "../todoUtils/filters";

// 할 일 목록과 관련된 상태와 함수를 제공하는 훅
const useTodos = () => {
  const { todos, setTodos, filter, setFilter } = useTodosState();
  const filteredTodos = useFilteredTodos(todos, filter);

  return {
    todos: filteredTodos,
    handleAddTodo: (todo) => handleAddTodo(todos, setTodos, todo),
    handleToggleComplete: (index) =>
      handleToggleComplete(todos, setTodos, index),
    handleDeleteTodo: (index) => handleDeleteTodo(todos, setTodos, index),
    handleSetFilter: (filter) => handleSetFilter(setFilter, filter),
    filter,
    FILTERS,
  };
};

export default useTodos;
