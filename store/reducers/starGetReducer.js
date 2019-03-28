import {FETCH_FILMS_SUCCESS} from "../actions/starGetTypeActions";

const initialState = {
    films: []
};

const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILMS_SUCCESS:
            return {
                ...state,
                films: action.films
            };
        default:
            return state;
    }
};

export default filmsReducer;