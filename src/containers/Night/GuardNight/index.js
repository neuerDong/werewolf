/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import Header from '../../../components/Header';
import Role from '../../../components/Roles';
import { headerTypes } from '../../../config/headerTypes';
import { roles } from '../../../config/roles';
import './styles.less';

class GuardNight extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shielded: '',
        };
    }

    avatarClick(shielded) {
        this.setState({
            shielded,
        });
    }

    render() {
        return (
            <div className="guard-night">
                <Header text={ headerTypes.guard } />
                <Role role={ roles.guard } />
                <div className="participant">
                    <div className="row">
                        <div className="cell">
                            {this.state.shielded === 1 && <img className="shielded" src={require('./imgs/shield.png')}/>}
                            <img
                                src='https://lh3.googleusercontent.com/-3KSfzAAh_0I/AAAAAAAAAAI/AAAAAAAAAAA/AFiYof1NxUtRYn0Yiyk7sVURMZmiDMsjbg/s64-c-mo/photo.jpg'
                                onClick={this.avatarClick.bind(this, 1)}
                            />
                            <div>玩家名称</div>
                        </div>
                        <div className="cell">
                            {this.state.shielded === 2 && <img className="shielded" src={require('./imgs/shield.png')}/>}
                            <img
                                src='https://lh3.googleusercontent.com/-3KSfzAAh_0I/AAAAAAAAAAI/AAAAAAAAAAA/AFiYof1NxUtRYn0Yiyk7sVURMZmiDMsjbg/s64-c-mo/photo.jpg'
                                onClick={this.avatarClick.bind(this, 2)}
                            />
                            <div>玩家名称</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="cell">
                            {this.state.shielded === 3 && <img className="shielded" src={require('./imgs/shield.png')}/>}
                            <img
                                src='https://lh3.googleusercontent.com/-3KSfzAAh_0I/AAAAAAAAAAI/AAAAAAAAAAA/AFiYof1NxUtRYn0Yiyk7sVURMZmiDMsjbg/s64-c-mo/photo.jpg'
                                onClick={this.avatarClick.bind(this, 3)}
                            />
                            <div>玩家名称</div>
                        </div>
                        <div className="cell">
                            {this.state.shielded === 4 && <img className="shielded" src={require('./imgs/shield.png')}/>}
                            <img
                                src='https://lh3.googleusercontent.com/-3KSfzAAh_0I/AAAAAAAAAAI/AAAAAAAAAAA/AFiYof1NxUtRYn0Yiyk7sVURMZmiDMsjbg/s64-c-mo/photo.jpg'
                                onClick={this.avatarClick.bind(this, 4)}
                            />
                            <div>玩家名称</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GuardNight;
