import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchShowEpisode} from '../actions/shows';
import {routes} from '../constants';

class View extends PureComponent {
    componentDidMount() {
        const {
            id,
            season,
            episode,
        } = this.props.match.params;
        this.props.fetchShowEpisode(id, season, episode);
    }

    render() {
        const {
            showEpisode: {
                isFetching,
                isLoaded,
                details,
                error,
            },
            match: {params: {id}}
        } = this.props;

        if (isFetching) {
            return 'Loading...';
        }

        return isLoaded && (
            <main className="show-episode-container">
                <h1>{details.name}</h1>
                <p className="back"><Link to={routes.SHOW_DETAIL.replace(':id', id)}><span role="img" aria-label="back">⏪</span> Back to show details</Link></p>

                <div className="row">
                    <div className="col media-img">
                        <img src={details.image.medium} alt=""/>
                    </div>
                    <div className="col media-summary">
                        <h4>Episode summary:</h4>
                        <p dangerouslySetInnerHTML={{ __html: details.summary }} />
                    </div>
                </div>

                {error && (
                    <div className="alert">
                        Something went wrong.
                    </div>
                )}
            </main>
        );
    }
}

const mapStateToProps = ({ showEpisode }) => ({
    showEpisode,
});

export default connect(mapStateToProps, { fetchShowEpisode })(View);
