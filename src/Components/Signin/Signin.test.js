import React from 'react';
import Signin from './Signin';
import {shallow, render, mount} from 'enzyme';

let mockState = {
    signinEmail: '',
    signinPassword: ''
}

describe("Signin Component", () => {
    it('expect to render Signin', () => {
        expect(shallow(<Signin />)).toMatchSnapshot();
    });

    it('expect to get initial state', () => {
        expect(shallow(<Signin />).state()).toEqual(mockState);
    });
});