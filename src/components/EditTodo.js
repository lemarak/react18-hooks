import { useState } from "react";
import Button from "./Button";

function EditTodo({ todo, editTodo, cancelEditTodo }) {
  const [value, setValue] = useState(todo.content);

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
      {/* <button onClick={handleClickTodo} className="btn btn-primary mr-5">
        Editer
      </button> */}
      <Button text="Annuler" onClick={cancelEditTodo} />
      {/* 
      <button onClick={cancelEditTodo} className="btn btn-reverse-primary mr-5">
        Annuler
      </button> */}
    </div>
  );
}

export default EditTodo;
