import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import conciertos from './reducers/conciertos';
import currentConcierto from './reducers/currentConcierto';
import createConcierto from './reducers/createConcierto';

const reducer = combineReducers({conciertos, currentConcierto, createConcierto});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)),);

export default store;