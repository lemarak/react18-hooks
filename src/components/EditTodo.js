import { useContext, useState } from "react";
import { todoDispatcherContext } from "../context/todoContext";
import Button from "./Button";

function EditTodo({ todo }) {
  const [value, setValue] = useState(todo.content);
  const dispatch = useContext(todoDispatcherContext);

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      handleClickTodo();
    }
  };
  const handleClickTodo = () => {
    if (value.length) {
      editTodo(value);
    }
  };

  const editTodo = (id, content) => {
    dispatch({
      type: "EDIT_TODO",
      id: todo.id,
      content: value,
    });
  };

  const cancelEditTodo = (id, content) => {
    dispatch({
      type: "CANCEL_EDIT_TODO",
      id: todo.id,
      content: todo.value,
    });
  };

  return (
    <div className="d-flex flex-row  align-items-center p-10">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        value={value}
        className="mr-15 flex-fill"
      />
      <Button text="Editer" onClick={handleClickTodo} className="mr-15" />

      <Button text="Annuler" onClick={cancelEditTodo} />
    </div>
  );
}

export default EditTodo;
