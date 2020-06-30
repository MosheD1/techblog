import React from 'react';
import MainPage from './MainPage';
import {shallow, render, mount} from 'enzyme';

describe('MainPage component', () => {
    it('expect to render MainPage', ()=> {
        expect(shallow(<MainPage />)).toMatchSnapshot();
    });
});