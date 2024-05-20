export default function TodoForm({ setTodos }) {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");

    if (!title.trim() || !content.trim()) {
      return alert("제목과 내용 모두 입력해주세요.");
    }

    const nextTodo = {
      id: crypto.randomUUID(),
      title: title,
      content: content,
      isDone: false,
    };

    setTodos((prevTodos) => [nextTodo, ...prevTodos]);

    e.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="제목을 입력해주세요." name="title" />
      <input type="text" placeholder="내용을 입력해주세요." name="content" />

      <button type="submit">입력</button>
    </form>
  );
}
