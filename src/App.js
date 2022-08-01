import { useReducer } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import themeContext from "./context/theme";
import { todoDispatcherContext, todoStateContext } from "./context/todoContext";
import todoReducer from "./reducers/todoReducer";

function App() {
  const [state, dispatch] = useReducer(todoReducer, {
    theme: "primary",
    todolist: [],
  });

  const handleChangeTheme = (e) => {
    dispatch({
      type: "SET_THEME",
      name: e.target.value,
    });
  };

  return (
    <todoStateContext.Provider value={state}>
      <todoDispatcherContext.Provider value={dispatch}>
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
              <AddTodo />

              <TodoList todolist={state.todolist} />
            </div>
          </div>
        </themeContext.Provider>
      </todoDispatcherContext.Provider>
    </todoStateContext.Provider>
  );
}

export default App;
