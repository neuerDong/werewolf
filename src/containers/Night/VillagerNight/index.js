/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import Header from '../../../components/Header';
import Role from '../../../components/Roles';
import Rule from '../../../components/Rule';
import { headerTypes } from '../../../config/headerTypes';
import { roles } from '../../../config/roles';
import './styles.less';

class VillagerNight extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="villager-night">
                <Header text={ headerTypes.villager } />
                <Role role={ roles.villager } />
                <Rule />
            </div>
        )
    }
}

export default VillagerNight;
