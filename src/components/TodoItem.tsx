/** @format */
import React from "react";
interface ITodoItem {
  text: string;
  date: string;
}
interface IProps {
  todoItem: ITodoItem;
}
const TodoItem = ({ todoItem }: IProps) => {
  return (
    <div className="todo-item">
      <input type="checkbox" name="todo-check" />
      <span className="todo-text">{todoItem.text}</span>
      <span className="todo-date">{todoItem.date}</span>
    </div>
  );
};

export default TodoItem;
