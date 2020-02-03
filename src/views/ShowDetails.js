import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchShow, fetchShowEpisodes} from '../actions/shows';
import {routes} from '../constants';

const leading = number => number < 10 ? `0${number}` : number;
const buildEpisodeUrl = (showId, season, episode) => {
    return routes.SHOW_EPISODE
        .replace(':id', showId)
        .replace(':season', season)
        .replace(':episode', episode);
};

class View extends PureComponent {
    componentDidMount() {
        this.props.fetchShow(this.props.match.params.id);
        this.props.fetchShowEpisodes(this.props.match.params.id);
    }

    render() {
        const {
            showDetails: {
                isFetching: showIsFetching,
                isLoaded: showIsLoaded,
                details,
                error: showError,
            },
            showEpisodes: {
                isFetching: episodesIsFetching,
                isLoaded: episodesIsLoaded,
                list: episodes,
                error: episodesError,
            }
        } = this.props;

        if (showIsFetching) {
            return 'Loading...';
        }

        if (showError) {
            return 'Something went wrong fetching the show information';
        }

        return showIsLoaded && (
            <main className="show-details-container">
                <h1>{details.name}</h1>
                <div className="row">
                    <div className="col media-img">
                        <img src={details.image ? details.image.medium : 'url-to-default-image'} alt=""/>
                    </div>
                    <div className="col media-summary">
                        <h4>Show details:</h4>
                        <p dangerouslySetInnerHTML={{ __html: details.summary }} />
                    </div>
                </div>

                {episodesIsFetching && <p>Loading episodes...</p>}
                {episodesError && <p>Something went wrong while fetching episodes</p>}
                {episodesIsLoaded && (
                    <div>
                        <p>{episodes.length} episodes available:</p>
                        <ul>
                            {episodes.map(({id, name, summary, season, number}) => (
                                <li key={id}>
                                    <strong>S{leading(season)}E{leading(number)}: </strong>
                                    <Link to={buildEpisodeUrl(details.id, season, number)}>{name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </main>
        );
    }
}

const mapStateToProps = ({ showDetails, showEpisodes }) => ({
    showDetails,
    showEpisodes,
});

export default connect(mapStateToProps, { fetchShow, fetchShowEpisodes })(View);
