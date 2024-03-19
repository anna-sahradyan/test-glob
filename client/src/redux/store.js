import {combineReducers} from "redux";
import users from '../redux/usersSlice';

const rootReducer = combineReducers({
    users,
    devTools: true
});
export default rootReducer;