import { useContext } from "react";
import { todoDispatcherContext } from "../context/todoContext";
import Button from "./Button";

function TodoItem({ todo }) {
  const dispatch = useContext(todoDispatcherContext);

  const deleteTodo = () => {
    dispatch({
      type: "DELETE_TODO",
      id: todo.id,
    });
  };

  const toggleTodoDone = (id) => {
    dispatch({
      type: "TOGGLE_TODO_DONE",
      id: todo.id,
    });
  };

  const toggleTodoEdit = (id) => {
    dispatch({
      type: "TOGGLE_TODO_EDIT",
      id: todo.id,
    });
  };

  const selectTodo = (id) => {
    dispatch({
      type: "SELECT_TODO",
      id: todo.id,
    });
  };

  return (
    <li
      onClick={selectTodo}
      className={`d-flex flex-row  align-items-center p-10 ${
        todo.selected ? "selected" : ""
      }`}
    >
      <span className="mr-15 flex-fill">
        {todo.content} {todo.done && "(✔)"}
      </span>
      <Button
        text="Valider"
        className="mr-15"
        onClick={(e) => {
          e.stopPropagation();
          toggleTodoDone();
        }}
      />
      <Button
        text="Editer"
        className="mr-15"
        onClick={(e) => {
          e.stopPropagation();
          toggleTodoEdit();
        }}
      />
      <Button
        text="Supprimer"
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo();
        }}
      />
      {/* <button
        onClick={(e) => {
          e.stopPropagation();
          toggleTodoDone();
        }}
        className="btn btn-primary mr-5"
      >
        Valider
      </button> */}
      {/* <button
        onClick={(e) => {
          e.stopPropagation();
          toggleTodoEdit();
        }}
        className="btn btn-primary mr-5"
      >
        Editer
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo();
        }}
        className="btn btn-reverse-primary"
      >
        Supprimer
      </button> */}
    </li>
  );
}

export default TodoItem;
