import React from 'react';
import BlogList from '../BlogList/BlogList';

import './MainPage.css'

const MainPage = ({blogs , name, onSubRouteChange}) => {
    return(
        <div>
            <h1 className='title'>{`Wellcome ${name}, let's create new content`}</h1>
            <div className='button'>
                <button onClick={() => onSubRouteChange('newBlog')}>New Blog</button>
            </div>
            <BlogList blogs={blogs}/>
        </div>
    )
}

export default MainPage;