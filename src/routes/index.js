import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Frame from '../containers/Frame';

export default () => (
    <Router history={browserHistory}>
        <Route path="/" component={Frame}>

        </Route>
    </Router>
);
