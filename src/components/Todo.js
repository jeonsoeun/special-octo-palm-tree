/** @format */

import { html } from "./lib.js";
import TodoItem from "./TodoItem.js";

const Todo = () => {
  const todoList = [{ text: "abcd", date: "2021-01-30" }];
  const onclick = (e) => {
    const inputStr = document.querySelector("#todo-list").value;
    todoList.push(inputStr);
    console.log(inputStr);
  };
  return html`<div class="todo">
    <h2>TODO LIST</h2>
    <div class="input">
      <input type="string" id="todo-input" />
      <button onClick=${onclick}>입력</button>
    </div>
    <div className="todo-list">
      ${todoList.map((v) => {
        return html`<${TodoItem} todoItem=${v} />`;
      })}
    </div>
  </div>`;
};

export default Todo;
