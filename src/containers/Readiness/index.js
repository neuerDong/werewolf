/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import Header from '../../components/Header';
import Role from '../../components/Roles';
import Rule from '../../components/Rule';
import Button from '../../components/Button';
import { headerTypes } from '../../config/headerTypes';
import { roles } from '../../config/roles';
import { buttonTypes } from '../../config/buttonTypes';
import './styles.less';

class Readiness extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isGameOwner: false,
        }
    }

    render () {
        return (
            <div className="readiness">
                <Header text={ headerTypes.waiting } />
                <Role role={ roles.placeholder } />
                <div className="game-rule">
                    <div className="top-line"></div>
                    <Rule />
                </div>
                {this.state.isGameOwner && (
                    <div className="start-button">
                        <Button buttonType={ buttonTypes.gameStart } />
                    </div>
                )}
                <div className="bottom-waiting">
                    <img className="text" src={require('./imgs/waiting.png')} />
                </div>
            </div>
        );
    }
}

export default Readiness;
