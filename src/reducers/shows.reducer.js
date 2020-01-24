import { actions } from '../constants';

const defaultState = {
    error: null,
    isFetching: false,
    isLoaded: false,
    list: null,
};

export default (state = defaultState, payload) => {
    switch (payload.type) {
        case actions.shows.request:
            return {
                ...state,
                isFetching: true,
                isLoaded: false,
            };

        case actions.shows.success:
            return {
                ...state,
                isFetching: false,
                isLoaded: true,
                list: payload.result,
            };

        case actions.shows.error:
            return {
                ...state,
                isFetching: false,
                isLoaded: false,
                error: payload.error,
                list: null,
            };

        default:
            return state;
    }
};
