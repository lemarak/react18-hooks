import { useReducer } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import themeContext from "./context/theme";
import todoReducer from "./reducers/todoReducer";

function App() {
  const [state, dispatch] = useReducer(todoReducer, {
    theme: "primary",
    todolist: [],
  });

  const addTodo = (content) => {
    dispatch({
      type: "ADD_TODO",
      content,
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      id,
    });
  };

  const toggleTodoDone = (id) => {
    dispatch({
      type: "TOGGLE_TODO_DONE",
      id,
    });
  };

  const toggleTodoEdit = (id) => {
    dispatch({
      type: "TOGGLE_TODO_EDIT",
      id,
    });
  };

  const editTodo = (id, content) => {
    dispatch({
      type: "EDIT_TODO",
      id,
      content,
    });
  };

  const cancelEditTodo = (id, content) => {
    dispatch({
      type: "CANCEL_EDIT_TODO",
      id,
      content,
    });
  };

  const selectTodo = (id) => {
    dispatch({
      type: "SELECT_TODO",
      id,
    });
  };

  const handleChangeTheme = (e) => {
    dispatch({
      type: "SET_THEME",
      name: e.target.value,
    });
  };

  return (
    <themeContext.Provider value={state.theme}>
      <div className="d-flex flex-column justify-content-center align-items-center p-20">
        <div className="container card p-20">
          <div className="d-flex  justify-content-sb align-items-center">
            <h1 className="mb-20 mr-15 flex-fill ">Todo list</h1>
            <select value={state.theme} onChange={handleChangeTheme}>
              <option value="primary">Rouge</option>
              <option value="secondary">Bleu</option>
            </select>
          </div>
          <AddTodo addTodo={addTodo} />

          <TodoList
            todolist={state.todolist}
            deleteTodo={deleteTodo}
            toggleTodoDone={toggleTodoDone}
            toggleTodoEdit={toggleTodoEdit}
            editTodo={editTodo}
            cancelEditTodo={cancelEditTodo}
            selectTodo={selectTodo}
          />
        </div>
      </div>
    </themeContext.Provider>
  );
}

export default App;
