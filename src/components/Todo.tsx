/** @format */

import TodoItem from "./TodoItem.js";
import React, { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([
    { text: "abcd", date: "2021-01-30" },
  ]);
  const onclick = () => {
    const inputElement: HTMLInputElement | null = document.querySelector(
      "#todo-list"
    );
    if (inputElement && inputElement.value) {
      const date = new Date();
      const dateStr = date.toISOString().split("T");
      setTodoList([
        ...todoList,
        {
          text: inputElement.value,
          date: `${dateStr[0]} ${dateStr[1].split("Z")[0]}`,
        },
      ]);
    }
  };
  return (
    <div className="todo">
      <h2>TODO LIST</h2>
      <div className="input">
        <input type="string" id="todo-input" />
        <button onClick={onclick}>입력</button>
      </div>
      <div className="todo-list">
        {todoList.map((v) => {
          return <TodoItem todoItem={v} />;
        })}
      </div>
    </div>
  );
};

export default Todo;
