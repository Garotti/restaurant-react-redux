import {combineReducers, compose, createStore} from "redux";
import menuReducer from "./menu-reducer";
import reservationReducer from "./reservation-reducer";

let reducers = combineReducers({
    menuPage: menuReducer,
    reservationPage: reservationReducer
});

const store = createStore(reducers);

window.__store__ = store;

console.log(store);

export default store;