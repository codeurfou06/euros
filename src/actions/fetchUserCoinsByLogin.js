import {fetchCoinsPending, fetchCoinsSuccess, fetchCoinsError} from './actionTypes';
import API_URL from './../Const';

function fetchUserCoinsByLogin(login) {
    var url =API_URL() + "own?login=" + login;    
    return dispatch => {
        dispatch(fetchCoinsPending());
        fetch(url)        
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchCoinsSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchCoinsError(error));
        })
    }
}

/*
function fetchCoins(countryId) {
    var url =API_URL() + "coin";
    if(countryId != null){
       url = url + "?CountryId=" + countryId;
    }
    return dispatch => {
        dispatch(fetchCoinsPending());
        fetch(url)        
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchCoinsSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchCoinsError(error));
        })
    }
}
*/

 export default fetchUserCoinsByLogin;

