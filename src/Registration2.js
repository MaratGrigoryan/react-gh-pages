import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'


class Registration2 extends React.Component {
    constructor(props) {
      super(props);
      this.handelSubmit = this.handelSubmit.bind(this)
      this.handelChange = this.handelChange.bind(this)
      this.handelClick = this.handelClick.bind(this)
      this.state = {
        day: "",
        dayError: "",
        month: "",
        monthError: "",
        year: "",
        yearError: "",
        hear:"",
      }
    };
  // Error-ները դուրս եմ բերել consolum
    validate = () => {
      let isError = false;
      const errors = {}
      if(this.state.day.length !== 2){
        isError = true;
        errors.dayError = "Խնդրում ենք ներմուծել 2 սիմվոլ";
      }
      if(this.state.month.length !== 2){
        isError = true;
        errors.monthError = "Խնդրում ենք ներմուծել 2 սիմվոլ";
      }
      if(this.state.year.length !== 4){
        isError = true;
        errors.yearError = "Խնդրում ենք ներմուծել 4 սիմվոլ";
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
        this.props.history.push("/Registration3")
        console.log(this.state)
      }
      event.preventDefault()
    }
  
  
    handelChange(event){
      this.setState({[event.target.name]: event.target.value})
    }
  
     handelClick(){
        this.props.history.push("/")
     }
  
    render() {
      return (
        <div className="container">
          <h3>Signup</h3>
          <div className="container1"><div className="minidiv2"></div></div>
          <form onSubmit={this.handelSubmit} className="form2">
            <div>
            <p>DATE OF BIRTH</p>           
                <input 
                type="text"
                name="day"
                className="number"
                placeholder="DD"
                value={this.state.day}
                onChange={this.handelChange}
                errortext={this.state.dayError}
                />
                
                <input 
                type="text"
                name="month"
                className="number"
                placeholder="MM"
                value={this.state.month}
                onChange={this.handelChange}
                errortext={this.state.monthError}
                />
                <input 
                type="text"
                name="year"
                className="number"
                placeholder="YYYY"
                value={this.state.year}
                onChange={this.handelChange}
                errortext={this.state.yearError}
                />
                </div>
                <div className="error">{this.state.monthError}</div>
                <div className="error">{this.state.dayError}</div>
                <div className="error">{this.state.yearError}</div>
                <div>
                <p>GENDER</p>
                    <label>
                        <input className="radio" type="radio" name="radio-test" value="male" checked/>
                        <span className="radio-custom">Male</span>
                    </label>
                    <label>
                        <input className="radio2" type="radio" name="radio-test" value="Female"/>
                        <span className="radio-custom2">Female</span>
                    </label>
                </div>
                <div>    
                <p>WHERE DID YOU HEAR ABOUT IS?</p>
                    <input
                    type="text"
                    name="hear"
                    className="hear"
                    value={this.state.hear}
                    onChange={this.handelChange}
                    />
                    <div>
                    <button className="back" onClick={this.handelClick}>&larr; Back</button>
                    <button className="next" >Next &rarr;</button>
                    </div>
                </div>
            </form>
        </div>

      );
    }
  }

  export default Registration2;