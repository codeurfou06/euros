export const FETCH_COINS_PENDING = 'FETCH_COINS_PENDING';
export const FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS';
export const FETCH_COINS_ERROR = 'FETCH_COINS_ERROR';

export const FETCH_COUNTRIES_PENDING = 'FETCH_COUNTRIES_PENDING';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const FETCH_COUNTRIES_ERROR = 'FETCH_COUNTRIES_ERROR';

export const SET_FILTER = 'SET_FILTER';

// COINS
export function fetchCoinsPending() {
    return {
        type: FETCH_COINS_PENDING
    }
}

export function fetchCoinsSuccess(coins) {
    return {
        type: FETCH_COINS_SUCCESS,
        coins: coins
    }
}

export function fetchCoinsError(error) {
    return {
        type: FETCH_COINS_ERROR,
        error: error
    }
}

// COUNTRIES
export function fetchCountriesPending() {
    return {
        type: FETCH_COUNTRIES_PENDING
    }
}

export function fetchCountriesSuccess(countries) {
    return {
        type: FETCH_COUNTRIES_SUCCESS,
        countries: countries
    }
}

export function fetchCountriesError(error) {
    return {
        type: FETCH_COUNTRIES_ERROR,
        error: error
    }
}


//SELECTED_COUNTRY_ID
export function setFilter(selectedCountryId, isCommemorative){
    console.log(selectedCountryId);
    console.log(isCommemorative);
    return {
        type : SET_FILTER,
        selectedCountryId : selectedCountryId,        
        isCommemorative : isCommemorative
    }
}