import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import themeContext from "./context/theme";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [theme, setTheme] = useState("primary");

  const addTodo = (content) => {
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false,
      selected: false,
    };
    setTodolist([...todolist, todo]);
  };

  const deleteTodo = (id) => {
    setTodolist(todolist.filter((todo) => todo.id !== id));
  };

  const toggleTodoDone = (id) => {
    setTodolist(
      todolist.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  const toggleTodoEdit = (id) => {
    setTodolist(
      todolist.map((todo) =>
        todo.id === id ? { ...todo, edit: !todo.edit } : todo
      )
    );
  };

  const editTodo = (id, value) => {
    setTodolist(
      todolist.map((todo) =>
        todo.id === id ? { ...todo, content: value, edit: false } : todo
      )
    );
  };

  const cancelEditTodo = (id, value) => {
    setTodolist(
      todolist.map((todo) => (todo.id === id ? { ...todo, edit: false } : todo))
    );
  };

  const selectTodo = (id) => {
    console.log(id);
    setTodolist(
      todolist.map((todo) => ({
        ...todo,
        selected: todo.id === id ? !todo.selected : false,
      }))
    );
  };
  const handleChangeTheme = (e) => {
    setTheme(e.target.value);
  };

  return (
    <themeContext.Provider value={theme}>
      <div className="d-flex flex-column justify-content-center align-items-center p-20">
        <div className="container card p-20">
          <div className="d-flex  justify-content-sb align-items-center">
            <h1 className="mb-20 mr-15 flex-fill ">Todo list</h1>
            <select value={theme} onChange={handleChangeTheme}>
              <option value="primary">Rouge</option>
              <option value="secondary">Bleu</option>
            </select>
          </div>
          <AddTodo addTodo={addTodo} />

          <TodoList
            todolist={todolist}
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

// ********* useContext **********

// const dataContext = createContext("infos");

// const A = () => {
//   const data = useContext(dataContext);
//   return (
//     <>
//       <h1>A</h1>
//       <h2>{data}</h2>
//       <dataContext.Provider value="infos from A">
//         <B />
//       </dataContext.Provider>
//     </>
//   );
// };
// const B = () => {
//   return (
//     <>
//       <h1>B</h1>
//       <C />
//       {/* <dataContext.Provider value="infos from B">

//       </dataContext.Provider> */}
//     </>
//   );
// };
// const C = () => {
//   const data = useContext(dataContext);
//   return (
//     <>
//       <h1>C</h1>
//       <h2>{data}</h2>
//     </>
//   );
// };

// function App() {
//   return <A />;
// }
// export default App;
