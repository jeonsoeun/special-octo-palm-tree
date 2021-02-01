/** @format */

import { React, reactDom, html } from "./components/lib.js";
import App from "./App.js";

reactDom.render(html`<${App} />`, document.getElementById("root"));
