import axios from '../../src/axios-starGet';
import {FETCH_FILMS_SUCCESS} from "./starGetTypeActions";

export const fetchFilmsStarGet = films => ({type: FETCH_FILMS_SUCCESS, films});

export const fetchFilms = () => {
    return dispatch => {
        return axios.get('/stargate.json').then(response => {
            console.log(response.data);
            dispatch(fetchFilmsStarGet(response.data))
        })
    }
};