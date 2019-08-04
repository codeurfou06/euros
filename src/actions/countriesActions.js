import {fetchCountriesPending, fetchCountriesSuccess, fetchCountriesError} from './actionTypes';
import API_URL from '../Const';

function fetchCountries() {
    return dispatch => {
        dispatch(fetchCountriesPending());
        fetch(API_URL() + "country")
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchCountriesSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchCountriesError(error));
        })
    }
}

export default fetchCountries;