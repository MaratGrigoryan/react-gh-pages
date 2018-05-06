import React, { Component } from "react";
import ReactDOM from "react-dom";
import Registration from "./Registration";
import Registration2 from "./Registration2";
import Registration3 from "./Registration3";
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

class App extends React.Component{     
    render() {
        return(
            <Router>
            <div>
                <Route exact path="/"  history={history} component={Registration}/>
                <Route path="/Registration2"  history={history} component={Registration2}/>
                <Route path="/Registration3" history={history} component={Registration3}/>
            </div>
            </Router>
        )
    }
}    

export default App;