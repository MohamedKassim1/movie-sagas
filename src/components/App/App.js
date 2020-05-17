import React, { Component } from 'react';
import './App.css';
import Home from '../MovieList/MovieList'
import Details from '../Details/Details'
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
    this.props.dispatch({type: 'SET_MOVIES'})
  }
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route exact path="/" render={(props) => <Home {...props} dispatch={this.props.dispatch} />} />
          <Route exact path="/details" render={(props) => <Details {...props} dispatch={this.props.dispatch} />} />
        </HashRouter>
      </div>
    );
  }
}

const reduxStateToProps = (reduxState) => ({ reduxState });
export default connect(reduxStateToProps)(App);
