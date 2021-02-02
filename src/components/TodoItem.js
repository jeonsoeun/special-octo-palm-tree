/** @format */

import { html } from "./lib.js";

const TodoList = ({ todoItem }) => {
  return html` <li class="todo-item">
    <input type="checkbox" name="todo-check" />
    <span className="todo-text">${todoItem.text}</span>
    <span className="todo-date">${todoItem.date}</span>
  </li>`;
};

export default TodoList;
