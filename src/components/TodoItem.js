/** @format */

import { html } from "./lib.js";

const TodoList = ({ todoItem }) => {
  return html` <div class="todo-item">
    <input type="checkbox" name="todo-check" />
    <span className="todo-text">${todoItem.text}</span>
    <span className="todo-date">${todoItem.date}</span>
  </div>`;
};

export default TodoList;
