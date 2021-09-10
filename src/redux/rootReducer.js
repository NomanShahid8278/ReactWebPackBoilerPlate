import { combineReducers } from 'redux';
import dummyReducer from '../components/dummy/store/reducer'

const rootReducer = combineReducers({
    dummy: dummyReducer
});

export default rootReducer;