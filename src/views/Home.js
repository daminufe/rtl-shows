import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import {fetchShows} from '../actions/shows';
import ShowItem from '../components/ShowItem';

class View extends PureComponent {
    componentDidMount() {
        if (!this.props.shows.isLoaded) {
            this.props.fetchShows();
        }
    }

    render() {
        const {
            shows: {
                isFetching,
                isLoaded,
                list,
                error,
            },
        } = this.props;

        if (isFetching) {
            return 'Loading...';
        }

        return (
            <main className="welcome">
                <h1>Welcome to the Powerpuff shows website.</h1>
                <p>Showing all the results for Powerpuff Girls shows.</p>

                <div className="show-list-container">
                    {isLoaded && list.map(({ show }) => <ShowItem key={show.id} show={show}/>)}
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

const mapStateToProps = ({ shows }) => ({
    shows,
});

export default connect(mapStateToProps, { fetchShows })(View);
