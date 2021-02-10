/** @format */

import React from "react";
import Welcome from "./components/Welcome";
import TodoList from "./components/Todo";
import "./style/main.css";

const App = () => {
  return (
    <div className="main">
      <h1>hello</h1>
      <Welcome message="Welcome" />
      <TodoList />
      <div>{__VERSION__}</div>
    </div>
  );
};

export default App;
