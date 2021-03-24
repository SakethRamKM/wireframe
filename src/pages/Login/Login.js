import React, { Component } from 'react';
import LoginHeader from '../../components/Login-header/LoginHeader';
import LoginContent from '../../components/Login-content/LoginContent';
import './Login.scss';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <LoginHeader />
                <LoginContent />
            </div>
        )
    }
}

export default Login
