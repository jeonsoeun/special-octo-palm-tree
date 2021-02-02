/** @format */

import { html, React } from "./lib.js";
import TodoItem from "./TodoItem.js";

const Todo = () => {
  const [todoList, setTodoList] = React.useState([
    { text: "abcd", date: "2021-01-30 12:00:00" },
  ]);
  const onclick = (e) => {
    const inputEl = document.querySelector("#todo-input");
    if (inputEl.value) {
      const date = new Date();
      const dateStr = `${set2Digits(date.getFullYear())}-${set2Digits(
        date.getMonth() + 1
      )}-${set2Digits(date.getDate())} ${set2Digits(
        date.getHours()
      )}:${set2Digits(date.getMinutes())}:${set2Digits(date.getSeconds())}`;
      setTodoList([...todoList, { text: inputEl.value, date: dateStr }]);
      console.log(todoList);
    }
  };
  const set2Digits = (num) => {
    return num >= 10 ? `${num}` : `0${num}`;
  };
  return html`<div class="todo">
    <h2>TODO LIST</h2>
    <div class="input">
      <input type="string" id="todo-input" />
      <button onClick=${onclick}>입력</button>
    </div>
    <ul className="todo-list">
      ${todoList.map((v) => html`<${TodoItem} todoItem=${v} />`)}
    </ul>
  </div>`;
};

export default Todo;
