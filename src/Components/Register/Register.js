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
                            <input onChange={this.state.onPasswordChange} type='text'></input>
                        </div>
                    </fieldset>
                    <input onClick={() => this.props.onRouteChange('home')} type='submit' value='Register'></input>
                </div>
        </main>
        );
    }
}

export default Register;