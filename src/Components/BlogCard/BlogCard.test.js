import React from 'react';
import BlogCard from './BlogCard';
import {shallow, render, mount} from 'enzyme';

describe('BlogCard component', () => {
    it('expect BlogCard to render', () => {
        expect(shallow(<BlogCard />)).toMatchSnapshot();
    });
})