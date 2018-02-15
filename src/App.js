import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import './App.css';

import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts";
import Post from "./components/Post/Post";
import Counter from "./components/Counter/CounterContainer";


class App extends Component {
  render() {
    return (
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/posts'>Posts</Link>
            </li>
          </ul>
        </nav>

        <Counter title='redux test' />

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/posts/:id' component={Post}/>
          <Route path='/posts' component={Posts}/>
          <Route path='*' render={() => {
            return(
              <Redirect to='/' />
            )}}
          />
        </Switch>
      </div>
    );
  }
}


export default App;