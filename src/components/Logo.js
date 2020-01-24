import React from 'react';
import {Link} from 'react-router-dom';
import {routes} from '../constants';
import LogoImg from '../assets/logo.png';

export default () => (
    <Link to={routes.INDEX} className="navbar-brand">
        <img className="logo" src={LogoImg} alt="RTL Shows" />
    </Link>
);
