import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Schedule from './Schedule';

const renderer = new ShallowRenderer();

describe('Schedule', () => {
  let properties;

  beforeEach(() => {
    properties = {
      games: []
    };
  });

  afterEach(() => {
    properties = null;
  });

  const render = () => {
    renderer.render(<Schedule {...properties } />);
    return {
      component: renderer.getRenderOutput(),
      instance: renderer.getMountedInstance()
    };
  };

  describe('render', () => {
    test('renders a Schedule with the correct properties', () => {
      const { component } = render();
      expect(component).toMatchSnapshot();
    });
  });
});
