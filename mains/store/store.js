import {createStore} from 'redux';
import { combineReducers } from 'redux';
import { userReducer } from './reducers/userReducer';

const finalReducer = combineReducers({
    user: userReducer
})

export const store = createStore(finalReducer);