import EditTodo from "./EditTodo";
import TodoItem from "./TodoItem";

function TodoList({ todolist }) {
  return todolist.length ? (
    <ul className="d-flex flex-column">
      {todolist.map((t) =>
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
