import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import HeaderComponent from '../src/components/HeaderComponent';

describe('<HeaderComponent /> rendering', () => {
    it('renders', () => {
        let wrapper = shallow(<HeaderComponent />);
        expect(wrapper.exists()).toBe(true);
    });
});
