import {combineReducers, compose, createStore} from "redux";
import menuReducer from "./menu-reducer";
import reservationReducer from "./reservation-reducer";
import blogReducer from "./blog-reducer";
import homeReducer from "./home-reducer";

let reducers = combineReducers({
    menuPage: menuReducer,
    reservationPage: reservationReducer,
    blogPage: blogReducer,
    homePage: homeReducer
});

const store = createStore(reducers);

window.__store__ = store;

console.log(store);

export default store;