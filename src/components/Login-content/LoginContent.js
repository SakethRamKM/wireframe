import React, { Component } from 'react';
import './LoginContent.scss';
import {withRouter} from 'react-router-dom';
import users from '../../assets/users';
import {connect} from 'react-redux';
import {updateUser} from '../../redux/user/user-actions';

class LoginContent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userid:'',
             password:'',
             isValid: true,
             msg:'',
             isPresent:false
        }
    }

    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=()=>{
        // alert(`${this.state.userid} ${this.state.password}`);
        const filteredUser=users.filter(user=>{
            return (this.state.userid===user.userid && this.state.password===user.password)
        })
        this.props.updateUser(filteredUser);

        if(this.state.userid.length>=8 && this.state.userid.length<21 && this.state.password.length>=8 && this.state.password.length<21 && filteredUser.length>0){
            this.setState({
                isValid:true
            })
            this.props.history.push('/dashboard');
        } else {
            this.setState({
                isValid:false,
                msg:'Please enter valid login credentials to continue'
            })
        }
    }
    
    render() {
        const {userid, password, isValid, msg}=this.state;
        return (
            <div className="login-content">
                {!isValid? <div className="login-error-msg"><i>Error: {msg}</i></div>:null}
                <div className="user-id">
                    <label htmlFor="userid">User ID</label>
                    <input type="text" id="userid" name="userid" value={userid} placeholder="Enter User ID" onChange={this.handleChange}></input>
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={password} placeholder="Password" onChange={this.handleChange}></input>
                </div>
                <div className="login-button">
                    <button onClick={this.handleSubmit}>Log In</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps= dispatch=>{
    return {
        updateUser: user=>dispatch(updateUser(user))
     }
 }

export default withRouter(connect(null,mapDispatchToProps)(LoginContent))
