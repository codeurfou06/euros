import {combineReducers} from 'redux';
import coins from './coinsReducer';
import countries from './countriesReducer';

const rootReducer = combineReducers({
  coins,
  countries,
});

export default rootReducer;