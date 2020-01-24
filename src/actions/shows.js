import {actions, API_URL} from '../constants';

const fetchApi = async (endpoint, dispatch, fetchActions) => {
    dispatch({ type: fetchActions.request });

    try {
        const res = await fetch(`${API_URL}${endpoint}`);
        if (!res.ok) {
            return dispatch({
                type: fetchActions.error,
                error: {
                    status: res.status,
                    statusText: res.statusText
                }
            });
        }

        const result = await res.json();
        dispatch({type: fetchActions.success, result });

        return result;
    } catch(err) {
        console.error(err);
        dispatch({
            type: fetchActions.error,
            error: err,
        });
    }
};

export const fetchShows = () => async dispatch => {
    return fetchApi('/search/shows?q=Powerpuff', dispatch, actions.shows)
};

export const fetchShow = showId => async dispatch => {
    return fetchApi(`/shows/${showId}`, dispatch, actions.showDetails)
};

export const fetchShowEpisodes = showId => async dispatch => {
    return fetchApi(`/shows/${showId}/episodes`, dispatch, actions.showEpisodes)
};

export const fetchShowEpisode = (showId, season, episode) => async dispatch => {
    return fetchApi(`/shows/${showId}/episodebynumber?season=${season}&number=${episode}`, dispatch, actions.showEpisode)
};
