import React, {Component} from 'react';
import Form from './LoginForm';
import '../style.css';

class Login extends Component {
    render() {
        return(
            <div className="login-layout">
                <div className="form-container">
                    <h1>欢迎登陆</h1>
                    <Form></Form>
                </div>
            </div>
        )
    }
}

export default Login;