/** @format */

import { html, React } from "./lib.js";
import TodoItem from "./TodoItem.js";

const Todo = () => {
  const todoList = React.useState();
  const todoList = [{ text: "abcd", date: "2021-01-30 12:00:00" }];
  const onclick = (e) => {
    const inputEl = document.querySelector("#todo-input");
    if (inputEl.value) {
      const date = new Date();
      const dateStr = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      todoList.push({ text: inputEl.value, date: dateStr });
    }
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
