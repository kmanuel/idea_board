import {shallow} from 'enzyme';
import React from 'react';
import App from './App';

describe('App', () => {
  it('should render without crashing', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  })
});
