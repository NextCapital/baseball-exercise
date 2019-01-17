import React, { Component } from 'react';
import { getGames } from './client';

import Schedule from './containers/Schedule/Schedule.jsx'
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

    return (
      <div className="App">
        <Schedule games={ this.state.games } />
        <button onClick={ setGames }>Get games</button>
      </div>
    );
  }
}

export default App;
