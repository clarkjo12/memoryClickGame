import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="brand">
        <h2>Can You Dig It?</h2>
      </li>

      <li id="rw">{props.rightWrong}</li>

      <li id="cur-sco">Current: {props.score}</li>

      <li id="top-sco">Best: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;
