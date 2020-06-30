import React from 'react';
import './BlogCard.css'

const BlogCard = ({title}) => {
    return (
        <div className='card defaultBorder gap'>
            <h4>{title}</h4>
        </div>
    );
}

export default BlogCard;