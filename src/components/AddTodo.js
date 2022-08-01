import { useContext, useState } from "react";
import { todoDispatcherContext } from "../context/todoContext";
import Button from "./Button";

function AddTodo() {
  const [value, setValue] = useState("");
  const dispatch = useContext(todoDispatcherContext);

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      handleClickTodo();
    }
  };
  const handleClickTodo = () => {
    if (value.length) {
      dispatch({
        type: "ADD_TODO",
        content: value,
      });
      setValue("");
    }
  };

  return (
    <div className="d-flex flex-row justify-content-center align-items-center mb-20">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        value={value}
        className="mr-15 flex-fill"
        name="content"
        placeholder="Ajouter une tâche"
      />
      <Button text="Ajouter" onClick={handleClickTodo} />
      {/* <button onClick={handleClickTodo} className="btn btn-primary">
        Ajouter
      </button> */}
    </div>
  );
}

export default AddTodo;
