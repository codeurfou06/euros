export const FETCH_COINS_PENDING = 'FETCH_COINS_PENDING';
export const FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS';
export const FETCH_COINS_ERROR = 'FETCH_COINS_ERROR';

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