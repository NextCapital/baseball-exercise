import map from 'lodash/map';
import React from 'react';
import PropTypes from 'prop-types';

import Game from '../../elements/Game/Game.jsx';

const Schedule = ({ games }) => {
  const content = games.length === 0 ?
    'No games to display' :
    map(games, (game, i) => <Game { ...game } />);

  return (<div className="schedule">{ content }</div>);
};

Schedule.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object)
};

Schedule.defaultProps = {
  games: []
};

export default Schedule;
