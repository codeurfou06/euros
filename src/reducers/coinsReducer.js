import coinsState from './coinsState';
import {FETCH_COINS_PENDING, 
        FETCH_COINS_SUCCESS, 
        FETCH_COINS_ERROR,
        SET_FILTER} 
        from '../actions/actionTypes';

function filter(state, action){
    console.log(state)
    console.log(action)
    var results = state.allCoins;
    if(action.selectedCountryId !== '0'){
        results = results.filter(item => item.CountryId == parseInt(action.selectedCountryId,10)).sort((a, b) => a.Year - b.Year);
    }
    if(action.isCommemorative === '1'){
        results = results.filter(item => item.IsCommemorative == true);
    }
    else if(action.isCommemorative === '0'){
        results = results.filter(item => item.IsCommemorative == false);
    }
    return results;
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
    case SET_FILTER:    
        console.log("SET_FILTER")
        console.log(state)
        return {
            ...state,
            filteredCoins: filter(state, action),
            selectedCountryId : action.selectedCountryId,
            isCommemorative : action.isCommemorative
        }      
    default: 
        return state;
  }
}

export const getCoins = state => state.coins;