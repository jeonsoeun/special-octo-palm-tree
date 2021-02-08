/** @format */

import React from "react";
import Welcome from "./components/Welcome.js";
import TodoList from "./components/Todo.js";

const App = () => {
  return (
    <div className="main">
      <h1>hello</h1>
      <Welcome message="Welcome" />
      <TodoList />
    </div>
  );
};

export default App;
