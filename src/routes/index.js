/**
 * External dependencies
 */
import React from 'react';
import { Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router';

/**
 * Internal dependencies
 */
import Frame from '../containers/Frame';
import CreateRoom from '../containers/CreateRoom';
import Readiness from '../containers/Readiness';
import DayTime from '../containers/Daytime';
import GuardNight from '../containers/Night/GuardNight';
import WerewolfNight from '../containers/Night/WerewolfNight';
import WitchNight from '../containers/Night/WitchNight';
import VillagerNight from '../containers/Night/VillagerNight';

export default () => (
    <Router history={hashHistory}>
        <Route path="/" components={Frame} />
        <Route path="/create-room" component={CreateRoom} />
        <Route path="/readiness" component={Readiness} />
        <Route path="/daytime" component={DayTime} />
        <Route path="/guard-night" component={GuardNight} />
        <Route path="/werewolf-night" component={WerewolfNight} />
        <Route path="/witch-night" component={WitchNight} />
        <Route path="/villager-night" component={VillagerNight} />
    </Router>
);
