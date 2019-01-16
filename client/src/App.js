import map from 'lodash/map'
import React, { Component } from 'react';
import { getGames } from './client';

import Game from './elements/Game/Game.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { games: [] };
  }

  render() {
    const setGames = () => {
      getGames().then((games) => {
        this.setState({ games });
      });
    };

    // TODO: This should probably be its own, stateless component
    const renderGames = (games = []) => {
      if (games.length === 0) {
        return (<div>No games to display</div>);
      }

      return map(games, (game, i) => <Game key={ i } { ...game }/>);
    };

    return (
      <div className="App">
        { renderGames(this.state.games) }
        <button onClick={ setGames }>Get games</button>
      </div>
    );
  }
}

export default App;
