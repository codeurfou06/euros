import initialState from './initialState';
import {FETCH_COINS_PENDING, 
        FETCH_COINS_SUCCESS, 
        FETCH_COINS_ERROR,
        FETCH_COUNTRIES_PENDING, 
        FETCH_COUNTRIES_SUCCESS, 
        FETCH_COUNTRIES_ERROR,
        SET_FILTER} 
        from '../actions/actionTypes';

function filter(state, action){
    var results = state.allCoins;
    if(action.selectedCountryId > 0){
        results = results.filter(item => item.CountryId === action.selectedCountryId).sort((a, b) => a.Year - b.Year);
    }
    if(action.isCommemorative === 1){
        results = results.filter(item => item.IsCommemorative === true);
    }
    else if(action.isCommemorative === 0){
        results = results.filter(item => item.IsCommemorative === false);
    }
    return results;
}

export default function coins(state = initialState, action) {
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
        return {
            ...state,
            filteredCoins: filter(state, action),
            selectedCountryId : action.selectedCountryId,
            isCommemorative : action.isCommemorative
        }      


    case FETCH_COUNTRIES_PENDING: 
        console.log("FETCH_COUNTRIES_PENDING")
          return {
              ...state,
              pending: true
          }
      case FETCH_COUNTRIES_SUCCESS:
          console.log("FETCH_COUNTRIES_SUCCESS")
          return {
              ...state,
              pending: false,
              countries: action.countries
          }
      case FETCH_COUNTRIES_ERROR:
          console.log("FETCH_COUNTRIES_ERROR")
          return {
              ...state,
              pending: false,
              error: action.error
          }
    default: 
        return state;
  }
}

export const getCoins = state => state.coins;