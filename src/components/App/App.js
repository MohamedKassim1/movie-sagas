import React, { Component } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details'
import Edit from '../Edit/Edit'
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
    this.props.dispatch({ type: 'SET_MOVIES' })
  }
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/edit" component={Edit} />
        </HashRouter>
      </div>
    );
  }
}

const reduxStateToProps = (reduxState) => ({ reduxState });
export default connect(reduxStateToProps)(App);
