import { combineReducers } from "redux";
import shopReducer from './Shopping/shopping-actions'

const rootReducer=combineReducers({
    shop:shopReducer
});

export default rootReducer;