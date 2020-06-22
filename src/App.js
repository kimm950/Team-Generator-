import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    playerName: '',
    players: ["Akutsu", "Kim", "Igai", "Mackee", "Nguyen", "Mike", "Aaron", "Sagar"],
    colors: ["Red", "Blue"],
    shuffledPlayers: [],
  }


  handleChange = (e) => {
    this.setState({ playerName: e.target.value });
  }

  addPlayer = () => {
    const { playerName, players } = this.state;
    const newplayer = players.concat(playerName)
    if (playerName !== "") {
      this.setState({ players: newplayer, playerName: '' })
    }
    this.generateTeam(players)
  }

  handleGenerateTeam = () => {
    const shuffledPlayers = this.generateTeam();
    this.setState({
      shuffledPlayers
    });
  }

  generateTeam = () => {
    const { players } = this.state
    const NewPlayers = [...players];
    let i = NewPlayers.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = NewPlayers[i];
      NewPlayers[i] = NewPlayers[j];
      NewPlayers[j] = temp;
    }
    return NewPlayers
  }

  onKeyPress = (e) => {
    if (e.keyCode === 13) {
      return this.addPlayer();
    }
  }

  render() {
    const { playerName, players, shuffledPlayers } = this.state;
    return (
      <div className="App" >
        <h1>Team Generator</h1>
        <div className="left" >
          <input
            value={playerName}
            onChange={e => this.handleChange(e)}
            onKeyDown={this.onKeyPress}
          />
          <button
            className="submit-button"
            onClick={this.addPlayer}
          >Submit Button</button>
        </div>
        <div className="right">
          {players.sort().map(player => (
            <li>{player}</li>
          ))
          }
          <button
            className="submit-button"
            onClick={this.handleGenerateTeam}
          >
            Submit Button
          </button>
          {shuffledPlayers.map(sp => (
            <li>{sp}</li>))
          }
        </div>
      </div>
    );
  }
}

export default App;
