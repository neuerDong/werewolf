/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import Header from '../../../components/Header';
import Role from '../../../components/Roles';
import Button from '../../../components/Button';
import { headerTypes } from '../../../config/headerTypes';
import { buttonTypes } from '../../../config/buttonTypes';
import { roles } from '../../../config/roles';
import './styles.less';

class WitchNight extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="witch-night">
                <Header text={ headerTypes.witch } />
                <Role role={ roles.witch } />
                <div className="dying-message">
                    <img src={require('../imgs/dying-message.png')} />
                </div>
                <div className="buttons">
                    <span>
                        <Button buttonType={ buttonTypes.save } />
                    </span>
                    <span>
                        <Button buttonType={ buttonTypes.unSave } />
                    </span>
                </div>
            </div>
        )
    }
}

export default WitchNight;
