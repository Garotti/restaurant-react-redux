import {combineReducers, createStore} from "redux";

let reducers = combineReducers({

});

const store = createStore(reducers);

window.__store__ = store;

console.log(store);

export default store;