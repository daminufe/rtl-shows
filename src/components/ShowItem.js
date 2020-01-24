import React from 'react';
import {Link} from 'react-router-dom';
import {routes} from '../constants';
import './ShowItem.scss';

export default ({show}) => {
    const { id, name, genres, rating, image } = show;

    return (
        <div className="show-item row">
            <div className="col media-img">
                <Link to={routes.SHOW_DETAIL.replace(':id', id)}>
                    <img src={image.medium} alt={name}/>
                </Link>
            </div>
            <div className="col media-summary">
                <p><Link to={routes.SHOW_DETAIL.replace(':id', id)}>{name}</Link></p>
                {genres.map(genre => (
                    <span className="badge" key={genre}>{genre}</span>
                ))}
            </div>
            Rating: {rating.average}
        </div>
    );
}
