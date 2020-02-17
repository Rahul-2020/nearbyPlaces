import {combineReducers} from 'redux';
import placeReducer from './places_reducer';

const rootReducer = combineReducers({
  place: placeReducer
});

export default rootReducer;