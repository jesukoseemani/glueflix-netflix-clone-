import {combineReducers} from "redux"
import moviesReducers from "./moviesReducers"
import loginReducers from "./loginReducers"
import authReducers from "./authReducers"


const rootReducer = combineReducers({
  movies: moviesReducers,
  login: loginReducers,
  user: authReducers

});

export default rootReducer;