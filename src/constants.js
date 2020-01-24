export const API_URL = 'http://api.tvmaze.com';

export const routes = {
    INDEX: '/',
    SHOWS_LIST: '/shows',
    SHOW_DETAIL: '/shows/:id',
    SHOW_EPISODE: '/shows/:id/season/:season/episode/:episode',
};

export const actions = {
    shows: {
        request: 'SHOWS_FETCH_REQUEST',
        success: 'SHOWS_FETCH_SUCCESS',
        error: 'SHOWS_FETCH_ERROR',
    },
    showDetails: {
        request: 'SHOW_DETAILS_FETCH_REQUEST',
        success: 'SHOW_DETAILS_FETCH_SUCCESS',
        error: 'SHOW_DETAILS_FETCH_ERROR',
    },
    showEpisodes: {
        request: 'SHOW_EPISODES_FETCH_REQUEST',
        success: 'SHOW_EPISODES_FETCH_SUCCESS',
        error: 'SHOW_EPISODES_FETCH_ERROR',
    },
    showEpisode: {
        request: 'SHOW_EPISODE_FETCH_REQUEST',
        success: 'SHOW_EPISODE_FETCH_SUCCESS',
        error: 'SHOW_EPISODE_FETCH_ERROR',
    }
};
