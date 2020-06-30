import React from 'react';
import BlogList from './BlogList';
import {shallow, render, mount} from 'enzyme';

describe('BlogList component', () => {
    it('expect BlogCard to render', () => {
        const mockBlogs = [
            {
                title: 'The new world'
              },
              {
                title: 'The new dicovery'
              }
        ]

        expect(shallow(<BlogList blogs={mockBlogs}/>)).toMatchSnapshot();
    });
})