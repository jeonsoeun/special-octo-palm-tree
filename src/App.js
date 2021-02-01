/** @format */

import { html } from "./components/lib.js";
import Welcome from "./components/Welcome.js";
import TodoList from "./components/Todo.js";

const App = () => {
  return html`
    <div class="main">
      <h1>hello</h1>
      <${Welcome} message="Welcome" />
      <${TodoList} />
    </div>
  `;
};

export default App;
