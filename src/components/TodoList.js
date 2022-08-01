import { useContext } from "react";
import { todoStateContext } from "../context/todoContext";
import EditTodo from "./EditTodo";
import TodoItem from "./TodoItem";

function TodoList() {
  const state = useContext(todoStateContext);

  return state.todolist.length ? (
    <ul className="d-flex flex-column">
      {state.todolist.map((t) =>
        t.edit ? (
          <EditTodo key={t.id} todo={t} />
        ) : (
          <TodoItem key={t.id} todo={t} />
        )
      )}
    </ul>
  ) : (
    <p>Pas de tâches</p>
  );
}

export default TodoList;
