const todoReducer = (state, action) => {
  console.log("action :", action);
  console.log("state :", state);
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todolist: [
          ...state.todolist,
          {
            id: crypto.randomUUID(),
            content: action.content,
            edit: false,
            done: false,
            selected: false,
          },
        ],
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todolist: state.todolist.filter((todo) => todo.id !== action.id),
      };
    }
    case "TOGGLE_TODO_DONE": {
      return {
        ...state,
        todolist: state.todolist.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    }
    case "TOGGLE_TODO_EDIT": {
      return {
        ...state,
        todolist: state.todolist.map((todo) =>
          todo.id === action.id ? { ...todo, edit: !todo.edit } : todo
        ),
      };
    }
    case "EDIT_TODO": {
      return {
        ...state,
        todolist: state.todolist.map((todo) =>
          todo.id === action.id
            ? { ...todo, content: action.content, edit: false }
            : todo
        ),
      };
    }
    case "CANCEL_EDIT_TODO": {
      return {
        ...state,
        todolist: state.todolist.map((todo) =>
          todo.id === action.id ? { ...todo, edit: false } : todo
        ),
      };
    }
    case "SELECT_TODO": {
      return {
        ...state,
        todolist: state.todolist.map((todo) => ({
          ...todo,
          selected: todo.id === action.id ? !todo.selected : false,
        })),
      };
    }
    case "SET_THEME": {
      return {
        ...state,
        theme: action.name,
      };
    }
    default: {
      throw new Error("action inconnue");
    }
  }
};
export default todoReducer;
