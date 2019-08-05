import coinsState from './coinsState';
import {FETCH_COINS_PENDING, FETCH_COINS_SUCCESS, FETCH_COINS_ERROR, CHANGE_SELECTED_COUNTRYID} from '../actions/actionTypes';

function test(state, action){
    if(action.selectedCountryId == '0'){
        return state.allCoins;
    }
    else{
        return state.allCoins.filter(item => item.CountryId == parseInt(action.selectedCountryId)).sort((a, b) => a.Year - b.Year);
    }
}

export default function coins(state = coinsState, action) {
  switch (action.type) {
    case FETCH_COINS_PENDING: 
      console.log("FETCH_COINS_PENDING")
         return {
             ...state,
             pending: true
         }
    case FETCH_COINS_SUCCESS:    
         console.log("FETCH_COINS_SUCCESS")
         return {
             ...state,
            pending: false,
            filteredCoins: action.coins,
            allCoins: action.coins
         }
    case FETCH_COINS_ERROR:
        console.log("FETCH_COINS_ERROR")
        return {
            ...state,
            pending: false,
            error: action.error
        }
    case CHANGE_SELECTED_COUNTRYID:    
        console.log("CHANGE_SELECTED_COUNTRYID")
        return {
            ...state,
            filteredCoins: test(state, action)
        }    
    default: 
        return state;
  }
}

export const getCoins = state => state.coins;