/** @format */

import { html } from "./lib.js";

const Welcome = ({ message = "" }) => {
  return html`<h3>${message}</h3>`;
};

export default Welcome;
