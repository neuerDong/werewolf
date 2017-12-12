/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Role from '../../components/Roles';
import Rule from '../../components/Rule';
import { headerTypes } from '../../config/headerTypes';
import { buttonTypes } from '../../config/buttonTypes';
import { roles } from '../../config/roles';
import './styles.less';

class Daytime extends Component {
    constructor(props) {
        super(props);

        this.state = {
            role: 'werewolf',
            isGameOwner: false,
        }
    }

    nextRound() {
        console.log('next-round...!');
    }

    gameOver() {
        console.log('game-over...!');
    }

    render() {
        return (
            <div className="daytime">
                <Header text={ headerTypes[this.state.role] } />
                <Role role={ roles[this.state.role] } />
                <Rule />
                {this.state.isGameOwner && (
                    <div className="buttons">
                        <span onClick={this.nextRound.bind(this)}>
                            <Button buttonType={ buttonTypes.nextRound } />
                        </span>
                        <span onClick={this.gameOver.bind(this)}>
                            <Button buttonType={ buttonTypes.gameOver } />
                        </span>
                    </div>
                )}
                {!this.state.isGameOwner && <Footer />}
            </div>
        );
    }
}

export default Daytime;
