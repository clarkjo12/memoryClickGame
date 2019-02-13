import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Header = styled.div`
  background-color: limegreen;
`;

class App extends Component {
  render() {
    return (
      <Header>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Header>
    );
  }
}

export default App;
