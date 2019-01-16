import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ awayTeam, homeTeam }) => (<div>{ `${awayTeam.name} @ ${homeTeam.name}` }</div>);

Game.propTypes = {
  awayTeam: PropTypes.object,
  homeTeam: PropTypes.object
}

export default Game;
