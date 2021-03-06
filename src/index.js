import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('SET_MOVIES', fetchMovies);
    yield takeEvery('FETCH_GENRES', fetchCategories);
    yield takeEvery('EDIT_DETAILS', fetchDetails);
}
//getting movies
function* fetchMovies() {
    try {
        let movieResponse = yield axios.get('/movies');
        yield put({ type: 'FETCH_MOVIES', payload: movieResponse.data });
    } catch (err) {
        console.log(err);
    }
}
//getting the categories of movie
function* fetchCategories(action){
    try {
        console.log('id from fetch', action.payload)
        let categoryResponse = yield axios.get(`/genres/${action.payload}`);
        yield put({ type: 'SET_GENRES', payload: categoryResponse.data });
    } catch (err) {
        console.log(err);
    }
}
//edit movie
function* fetchDetails(action){
    try {
        let categoryResponse = yield axios.put(`/edit/`, action.payload);
        yield put({ type: 'FETCH_DETAILS'});
    } catch (err) {
        console.log(err);
    }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const getDetails = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        getDetails
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
