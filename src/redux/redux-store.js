import {combineReducers, compose, createStore} from "redux";
import menuReducer from "./menu-reducer";

let reducers = combineReducers({
    menuPage: menuReducer,
});

const store = createStore(reducers);

window.__store__ = store;

console.log(store);

export default store;