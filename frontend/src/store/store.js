import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'


import { eventiReducer } from './reducers/eventiReducer.js';

const rootReducer = combineReducers({
    eventiModule: eventiReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
<<<<<<< HEAD
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
=======
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
>>>>>>> 13ec315f156a65f0d927550a7d31be1246ae3c3a
