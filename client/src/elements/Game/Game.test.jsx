import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Game from './Game';

const renderer = new ShallowRenderer();

describe('Game', () => {
  let properties;

  beforeEach(() => {
    properties = {
      awayTeam: {
        name: 'Away Team'
      },
      homeTeam: {
        name: 'Home Team'
      }
    };
  });

  afterEach(() => {
    properties = null;
  });

  const render = () => {
    renderer.render(<Game {...properties }/>);
    return {
      component: renderer.getRenderOutput(),
      instance: renderer.getMountedInstance()
    };
  };

  describe('render', () => {
    test('renders a Game with the correct properties', () => {
      const { component } = render();
      expect(component).toMatchSnapshot();
    });
  });
});
