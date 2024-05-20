import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    const value = parseInt(inputValue);

    if (!isNaN(value)) {
      setCount(count + value);
    }
    setInputValue("");
  };

  const handleSub = () => {
    const value = parseInt(inputValue);

    if (!isNaN(value)) {
      setCount(count - value);
    }
    setInputValue("");
  };

  const handleReset = () => {
    setCount(0);
    setInputValue("");
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="text" value={inputValue} onChange={inputChange} />
        <button onClick={handleAdd}>더할게요</button>
        <button onClick={handleSub}>뺄게요</button>
        <button onClick={handleReset}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{count}</p>
      </div>
    </div>
  );
}
