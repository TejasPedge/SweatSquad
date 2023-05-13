import { applyMiddleware, combineReducers, legacy_createStore,createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as LoginReducer } from "./Login/reducer"
// import rootReducer from './reducers/index';


const rootReducer = combineReducers({ LoginReducer })
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))