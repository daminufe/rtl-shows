import { combineReducers } from 'redux';
import shows from './shows.reducer';
import showDetails from './show-details.reducer';
import showEpisodes from './show-episodes.reducer';
import showEpisode from './show-episode.reducer';

export default combineReducers({
    shows,
    showDetails,
    showEpisodes,
    showEpisode,
});
