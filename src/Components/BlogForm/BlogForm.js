import React from 'react';
import './BlogForm.css'

const BlogForm = () => {
    return (
        <form autoComplete='off'>
            <fieldset>
                <legend>Blog</legend>
                <div className='widget'>
                    <label htmlFor='Blog-Title'>Title:</label>
                    <input name='Blog-Title' id='Blog-Title' type='text' placeholder='Title'></input>
                </div>
                <div className='widget'>
                    <label>Content:</label>
                    <textarea name='Blog-Content' type='text' placeholder='Write something'></textarea>
                </div>
                <button type='button'>Create</button>
            </fieldset>
        </form>
    );
}

export default BlogForm;