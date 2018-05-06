import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

class Registration extends React.Component {
    constructor(props) {
      super(props);
      this.handelSubmit = this.handelSubmit.bind(this)
      this.handelChange = this.handelChange.bind(this)
      this.state = {
        email: "",
        emailError: "",
        password: "",
        passwordError: "",
        Cpassword: "",
        CpasswordError: "",
      }
    };
    validate = () => {
      let isError = false;
      const errors = {}
      if(this.state.password.length < 6){
        isError = true;
        errors.passwordError = "Խնդրում ենք ներմուծել 6 սիմվոլ և ավել";
      }
      if(this.state.email.indexOf("@") === -1){
        isError = true;
        errors.emailError = "Խնդրում ենք ներմուծել '@' սիմվոլը ";
      }
      if(this.state.password !== this.state.Cpassword){
        isError = true;
        errors.CpasswordError = "Գաղտնաբառը չի համընկնում ";
        
      }
      if(isError){
       this.setState({
           ...this.state,
           ...errors
       })
      }
      return isError
    }
  
    handelSubmit(event){
      const err = this.validate();
      if(!err){
        this.props.history.push("/Registration2")
        console.log(this.state)
      }
      event.preventDefault()
    }
  
  
    handelChange(event){
    this.setState({[event.target.name]: event.target.value})
    }
  
  
    render() {
      return (
        <div className="container">
          <h3>Signup</h3>
          <div className="container1"><div className="minidiv1"></div></div>
            <form onSubmit={this.handelSubmit} >
                <div className="form">
                    <input
                    name="email"
                    type="text"
                    id="email"
                    className="text"
                    placeholder="EMAIL IS REQUIRED"
                    value={this.state.email}
                    onChange={this.handelChange}
                    errortext={this.state.emailError}
                    />
                    <div className="error">{this.state.emailError}</div>
                    <input
                    name="password"
                    type="password"
                    id="password"
                    className="text"
                    placeholder="PASSWORD"
                    value={this.state.password}
                    errortext={this.state.passwordError}
                    onChange={this.handelChange}          
                    />
                    <div className="error">{this.state.passwordError}</div>
                    <input
                    name="Cpassword"
                    type="password"
                    className="text"
                    placeholder="CONFIRM PASSWORD"
                    value={this.state.Cpassword}
                    errortext={this.state.CpasswordError}
                    onChange={this.handelChange}          
                    />
                    <div className="error">{this.state.CpasswordError}</div>
                    <hr />
                    <button className="next1" id="next1">Next &rarr;</button>
                </div>
            </form>
        </div>
      );
    }
  }

  export default Registration;