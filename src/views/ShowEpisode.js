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
            <main>
                <h1>{details.name}</h1>
                <p><Link to={routes.SHOW_DETAIL.replace(':id', id)}><span role="img" aria-label="back">⏪</span> Back to show details</Link></p>
                <div className="show-information">
                    <img src={details.image.medium} alt=""/>
                    <p className="show-summary" dangerouslySetInnerHTML={{ __html: details.summary }} />
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
