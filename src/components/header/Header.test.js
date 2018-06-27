import {shallow} from 'enzyme';
import React from 'react';
import Header from './Header';

describe('Header', () => {
    it('should render Header component', () => {
        expect(shallow(<Header />)).toMatchSnapshot();
    })
});