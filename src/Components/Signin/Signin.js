import React, {Component} from 'react'
import './Signin.css'

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signinEmail: '',
            signinPassword: ''
        }
    }

    onEmailChange = (e) => {
        this.setState({signinEmail: e.target.value});
    }

    onPasswordChange = (e) => {
        this.setState({signinPassword: e.target.value});
    }

    onSubmitSignIn = () => {
        this.props.onRouteChange('home');
        this.props.loadUser(this.state);
    }

    render() {
        return(
            <main>
                <div className='container signin'>
                    <fieldset>
                        <legend>SignIn</legend>
                        <div className='widget'>
                            <label>Email</label>
                            <input onChange={this.onEmailChange} type='text'></input>
                        </div>
                        <div className='widget'>
                            <label>Password</label>
                            <input onChange={this.onPasswordChange} type='text'></input>
                        </div>
                    </fieldset>
                    <input onClick={() => this.onSubmitSignIn()} type='submit' value='Sign in'></input>
                </div>
        </main>
        );
    }
}

export default Signin;