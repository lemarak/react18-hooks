import { useContext } from "react";
import {
  todoDispatcherContext,
  todoStateContext,
} from "../context/todoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoFeature = () => {
  const dispatch = useContext(todoDispatcherContext);
  const state = useContext(todoStateContext);

  const handleChangeTheme = (e) => {
    dispatch({
      type: "SET_THEME",
      name: e.target.value,
    });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-20">
      <div className="container card p-20">
        <div className="d-flex  justify-content-sb align-items-center">
          <h1 className="mb-20 mr-15 flex-fill ">Todo list</h1>
          <select value={state.theme} onChange={handleChangeTheme}>
            <option value="primary">Rouge</option>
            <option value="secondary">Bleu</option>
          </select>
        </div>
        <AddTodo />

        <TodoList />
      </div>
    </div>
  );
};

export default TodoFeature;
