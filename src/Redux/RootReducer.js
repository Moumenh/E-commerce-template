import { combineReducers } from 'redux';
import UserReducer from './Users/UserReducers';

const RootReducer = combineReducers({
    user: UserReducer,
});

export default RootReducer;