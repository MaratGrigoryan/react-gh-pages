import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

export default class Registration3 extends React.Component{
    render(){
        return(

        <div className="container">
             <h3>Thank you!</h3>
            <div className="container1"><div className="minidiv3"></div></div>
            <div className="ok">
               <span className="like"> &#10004;</span>
            </div>
            <button className="good"><Link to="/">Go to Dashboard &rarr;</Link></button>
        </div>
        )
    }
}