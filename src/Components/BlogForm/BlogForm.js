import React from 'react';
import './BlogForm.css'

const initialState = {
    title: '',
    body: ''
}

class BlogForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    onTitleChange = (e) => {
        this.setState({title: e.target.value});
    }

    onBodyChange = (e) => {
        this.setState({body: e.target.value});
    }

    onBlogSubmit = () => {
        fetch('http://localhost:3001/publish', {
            method: 'post',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
                title: this.state.title,
                blog: this.state.body,
                author: this.props.userName,
                userid: this.props.userId
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                this.props.requestBlogs();
                this.props.onSubRouteChange('mainPage');
            }
        })
        .catch(err => console.log);
    }

    render() {
        return (
            <form autoComplete='off'>
                <fieldset>
                    <legend>Blog</legend>
                    <div className='widget'>
                        <label htmlFor='Blog-Title'>Title:</label>
                        <input onChange={this.onTitleChange} name='Blog-Title' id='Blog-Title' type='text' placeholder='Title'></input>
                    </div>
                    <div className='widget'>
                        <label>Content:</label>
                        <textarea onChange={this.onBodyChange} name='Blog-Content' id='Blog-Content' type='text' placeholder='Write something'></textarea>
                    </div>
                    <button onClick={this.onBlogSubmit} type='button'>Create</button>
                </fieldset>
            </form>
        );
    }
}

export default BlogForm;