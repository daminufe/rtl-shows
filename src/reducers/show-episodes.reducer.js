import { actions } from '../constants';

const defaultState = {
    error: null,
    isFetching: false,
    isLoaded: false,
    list: null,
};

export default (state = defaultState, payload) => {
    switch (payload.type) {
        case actions.showEpisodes.request:
            return {
                ...state,
                isFetching: true,
                isLoaded: false,
            };

        case actions.showEpisodes.success:
            return {
                ...state,
                isFetching: false,
                isLoaded: true,
                list: payload.result,
            };

        case actions.showEpisodes.error:
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
