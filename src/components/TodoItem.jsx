export default function TodoItem({ todo, setTodos }) {
  const { id, title, content, isDone } = todo;

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const changeTodo = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      <h2>{title}</h2>
      <h3>{content}</h3>

      <div>
        <button onClick={changeTodo}>{isDone ? "취소" : "완료"}</button>
        <button onClick={deleteTodo}>삭제</button>
      </div>
    </div>
  );
}
