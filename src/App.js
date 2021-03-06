import React, { Component } from "react";

import Card from "./components/Card";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import styled from "styled-components";
import Row from "./components/Row";
import Column from "./components/Column";
import Container from "./components/Container";

import characters from "./dogs.json";
import "./App.css";

//algorithm
function shuffleCharacters(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const CardDiv = styled.div`
  width: 20%;
`;

class App extends Component {
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    } else if (newScore === 12) {
      alert("congrats! you actully made it!");
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "YOU ROOSE!!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCharacters = shuffleCharacters(characters);
    this.setState({ characters: shuffledCharacters });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        <Container>
          <Row>
            {this.state.characters.map(character => (
              <Column size="md-3 sm-6">
                <CardDiv>
                  <Card
                    key={character.id}
                    handleClick={this.handleClick}
                    handleIncrement={this.handleIncrement}
                    handleReset={this.handleReset}
                    handleShuffle={this.handleShuffle}
                    id={character.id}
                    image={character.image}
                  />
                </CardDiv>
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
