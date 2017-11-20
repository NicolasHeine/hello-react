import { combineReducers, createStore } from 'redux';
import todos from './reducers/todos';
import filter from './reducers/filter';

let rootReducer = combineReducers({ todos, filter });
let store = createStore(rootReducer);

export default store;