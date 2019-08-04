import countriesState from './countriesState';
import {FETCH_COUNTRIES_PENDING, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_ERROR} from '../actions/actionTypes';

export default function countries(state = countriesState, action) {
  switch (action.type) {
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

export const getCountries = state => state.countries;
export const getCountriesPending = state => state.pending;
export const getCountriesError = state => state.error;