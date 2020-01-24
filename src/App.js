import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Layout from './views/Layout';
import asyncComponent from './components/AsyncComponent';
import {
    routes,
} from './constants';

const ShowsList = asyncComponent(() => import('./views/Home'));
const ShowDetails = asyncComponent(() => import('./views/ShowDetails'));
const ShowEpisode = asyncComponent(() => import('./views/ShowEpisode'));

const App = () => (
    <Router>
        <Switch>
            <Layout>
                <Route exact path={routes.INDEX} component={ShowsList}/>
                <Route exact path={routes.SHOW_DETAIL} component={ShowDetails}/>
                <Route exact path={routes.SHOW_EPISODE} component={ShowEpisode}/>
            </Layout>
        </Switch>
    </Router>
);


export default App;
