import React from 'react';
import Register from './Register';
import {shallow, render, mount} from 'enzyme';

let mockState = {
    registerName: '',
    registerEmail: '',
    registerPassword: ''
}

describe('Register', () => {
    it('expect Register to be render', () => {
        expect(shallow(<Register />)).toMatchSnapshot();
    });

    it('expect to get initial state', () => {
        expect(shallow(<Register />).state()).toEqual(mockState);
    });
});