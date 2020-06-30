import React from 'react';
import BlogCard from '../BlogCard/BlogCard';

import './BlogList.css';

const BlogList = ({blogs}) => {
    return (
        <div className='center'>
            {
                blogs.map((b, i) => {
                    return (<BlogCard key={i} title={b.title} />);
                })
            }
        </div>
    )
}

export default BlogList;