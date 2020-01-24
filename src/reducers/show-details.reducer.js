import { actions } from '../constants';

const defaultState = {
    error: null,
    isFetching: false,
    isLoaded: false,
    details: null,
};

export default (state = defaultState, payload) => {
    switch (payload.type) {
        case actions.showDetails.request:
            return {
                ...state,
                isFetching: true,
                isLoaded: false,
            };

        case actions.showDetails.success:
            return {
                ...state,
                isFetching: false,
                isLoaded: true,
                details: payload.result,
            };

        case actions.showDetails.error:
            return {
                ...state,
                isFetching: false,
                isLoaded: false,
                error: payload.error,
                details: null,
            };

        default:
            return state;
    }
};
