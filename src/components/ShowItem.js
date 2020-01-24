import React from 'react';
import {Link} from 'react-router-dom';
import {routes} from '../constants';

export default ({show}) => {
    const { id, name, genres, rating, image } = show;

    return (
        <div className="show-item">
            <img src={image.medium} width="40px" alt=""/>
            <Link to={routes.SHOW_DETAIL.replace(':id', id)}>
                {name}
            </Link>
            {genres}
            Rating: {rating.average}
        </div>
    );
}
