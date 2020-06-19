import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    playerName: '',
    players: ["Akutsu", "Kim", "Igai", "Mackee", "Nguyen", "Mike", "Aaron", "Sagar"],
    colors: ["Red", "Blue"],
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

  generateTeam = (players) => {
    let i = players.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = players[i];
      players[i] = players[j];
      players[j] = temp;
    }
    return players;
  }

  onKeyPress = (e) => {
    if (e.keyCode === 13) {
      this.addPlayer();
    }
  }

  render() {
    const { playerName, players } = this.state
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
        </div>
        <button
          className="submit-button"
          onClick={this.generateTeam(players)}
        >Submit Button</button>
        {players}
      </div>
    );
  }
}

export default App;
