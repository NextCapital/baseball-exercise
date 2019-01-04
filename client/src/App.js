import React, { Component } from 'react';
import client from './client';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { games: [] };
  }

  // TODO: This should probably be moved to client.js
  getData(relativePath) {
    client.get(relativePath).then(({ data, status }) => {
      this.setState({ games: data });
    });
  }

  render() {
    // TODO: This should also probably be in client.js
    const getGames = () => {
      this.getData('games/index');
    };

    // TODO: This should likely be a stateless, 'Game' component
    const renderGame = ({ away_team, home_team }) => {
      return (
        <div>{`${away_team.name} @ ${home_team.name}`}</div>
      );
    };

    // TODO: This should also probably be its own, stateless component
    const renderGames = (games = []) => {
      if (games.length === 0) {
        return (<div>No games to display</div>);
      }

      return games.map(renderGame);
    };

    return (
      <div className="App">
        { renderGames(this.state.games) }
        <button onClick={ getGames }>Get games</button>
      </div>
    );
  }
}

export default App;
