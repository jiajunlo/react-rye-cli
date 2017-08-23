import { combineReducers } from 'redux';
import baseReducer from './baseReducer';

const rootReducer = combineReducers({
    base: baseReducer
});

export default rootReducer;