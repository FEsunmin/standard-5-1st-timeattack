import TodoItem from "./TodoItem";

export default function TodoList({ title, todos, setTodos }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} setTodos={setTodos} />
          </li>
        ))}
      </ul>
    </div>
  );
}
