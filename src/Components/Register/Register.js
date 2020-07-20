import React, {Component} from 'react'
import './Register.css'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerName: '',
            registerEmail: '',
            registerPassword: ''
        }
    }

    onNameChange = (e) => {
        this.setState({registerName: e.target.value});
    }

    onEmailChange = (e) => {
        this.setState({registerEmail: e.target.value});
    }

    onPasswordChange = (e) => {
        this.setState({registerPassword: e.target.value});
    }

    onSubmitRegister = () => {
        fetch('http://localhost:3001/register', {
            method: 'post',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email: this.state.registerEmail,
                name: this.state.registerName,
                password: this.state.registerPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        });
    }

    render() {
        return(
            <main>
                <div className='container register'>
                    <fieldset>
                        <legend>Register</legend>
                        <div className='widget'>
                            <label>Name</label>
                            <input onChange={this.onNameChange} type='text'></input>
                        </div>
                        <div className='widget'>
                            <label>Email</label>
                            <input onChange={this.onEmailChange} type='text'></input>
                        </div>
                        <div className='widget'>
                            <label>Password</label>
                            <input onChange={this.onPasswordChange} type='text'></input>
                        </div>
                    </fieldset>
                    <input onClick={this.onSubmitRegister} type='submit' value='Register'></input>
                </div>
        </main>
        );
    }
}

export default Register;