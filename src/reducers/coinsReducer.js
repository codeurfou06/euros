import coinsState from './coinsState';
import {FETCH_COINS_PENDING, FETCH_COINS_SUCCESS, FETCH_COINS_ERROR} from '../actions/actionTypes';

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
             coins: action.coins
         }
    case FETCH_COINS_ERROR:
        console.log("FETCH_COINS_ERROR")
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
export const getCoinsPending = state => state.pending;
export const getCoinsError = state => state.error;