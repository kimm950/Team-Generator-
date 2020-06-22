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
          <h2>Team Generator</h2>
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
            <div className='players'>
              {players.sort().map(player => (
                <li>{player}</li>
              ))
              }
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-wrapper">
            <button
              className="shuffle-button"
              onClick={this.handleGenerateTeam}
            >
              Shuffle!
          </button>
            <div className='small-header'>Warriors</div>
            <div className='shuffled-players'>
              {shuffledPlayers.map((sp, i) => (
                <li style={{ color: colors[i] }} key={i}>{sp}</li>))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
