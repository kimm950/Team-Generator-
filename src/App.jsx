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
    const colors = ['#0088FE', '#0088FE', '#00C49F', '#00C49F', '#FFBB28', '#FFBB28', '#FF8042', '#FF8042', '#0088FE', '#0088FE', '#00C49F', '#00C49F', '#FFBB28', '#FFBB28', '#FF8042', '#FF8042', '#0088FE', '#0088FE', '#00C49F', '#00C49F', '#FFBB28', '#FFBB28', '#FF8042', '#FF8042'];
    return (
      <div className="App" >
        <div className='header'>
          <h1>Team Generator</h1>
          <div className="left" >
            <div className='input-wrapper'>
              <input
                className='input'
                value={playerName}
                onChange={e => this.handleChange(e)}
                onKeyDown={this.onKeyPress}
              />
              <button
                className="submit-button"
                onClick={this.addPlayer}
              >Invite!</button>
            </div>
            {players.sort().map(player => (
              <li>{player}</li>
            ))
            }
          </div>
        </div>
        <div className="right">
          <button
            className="submit-button"
            onClick={this.handleGenerateTeam}
          >
            Shuffle!
          </button>
          <ul className='shuffled-players'>
            {shuffledPlayers.map((sp, i) => (
              <li style={{ color: colors[i] }} key={i}>{sp}</li>))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
