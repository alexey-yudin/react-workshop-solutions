import React from 'react';
import {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {BookList} from './book-list/book-list';
import {Login} from './login/login';
import {BookDetail} from './book-detail/book-detail';
import './App.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={BookList}/>
          <Route path='/rows' component={BookList}/>
          <Route path='/grid' component={BookList}/>
          <Route path='/login' component={Login}/>
          <Route path='/book-detail/:id' component={BookDetail}/>
        </div>
      </Router>
    );
  }
}

export default App;
