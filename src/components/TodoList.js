import EditTodo from "./EditTodo";
import TodoItem from "./TodoItem";

function TodoList({
  todolist,
  deleteTodo,
  toggleTodoDone,
  toggleTodoEdit,
  editTodo,
  cancelEditTodo,
  selectTodo,
}) {
  return todolist.length ? (
    <ul className="d-flex flex-column">
      {todolist.map((t) =>
        t.edit ? (
          <EditTodo
            key={t.id}
            todo={t}
            editTodo={(content) => editTodo(t.id, content)}
            cancelEditTodo={() => cancelEditTodo(t.id)}
          />
        ) : (
          <TodoItem
            key={t.id}
            todo={t}
            deleteTodo={() => deleteTodo(t.id)}
            toggleTodoDone={() => toggleTodoDone(t.id)}
            toggleTodoEdit={() => toggleTodoEdit(t.id)}
            selectTodo={() => selectTodo(t.id)}
          />
        )
      )}
    </ul>
  ) : (
    <p>Pas de tâches</p>
  );
}

export default TodoList;
