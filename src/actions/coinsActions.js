import {fetchCoinsPending, fetchCoinsSuccess, fetchCoinsError} from './actionTypes';
import API_URL from './../Const';

function fetchCoins() {
    return dispatch => {
        dispatch(fetchCoinsPending());
        fetch(API_URL() + "coin")
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchCoinsSuccess(res.coins));
            return res.coins;
        })
        .catch(error => {
            dispatch(fetchCoinsError(error));
        })
    }
}

export default fetchCoins;