import {shallow} from 'enzyme';
import React from 'react';
import ToolBar from './ToolBar';

describe('Toolbar', () => {

    let mockProps;
    let wrapper;

    beforeEach(() => {
        mockProps = {
            createIdea: jest.fn()
        };
        wrapper = shallow(<ToolBar {...mockProps} />);
    });

    it('should render without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call createIdea function when button clicked', () => {
        wrapper.find('#new-idea-btn').simulate('click');
        expect(mockProps.createIdea.mock.calls.length).toBe(1);
    });

});
