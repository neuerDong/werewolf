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

class WerewolfNight extends Component {
    constructor(props) {
        super(props);

        this.state = {
            killed: '',
        }
    }

    avatarClick(killed) {
        this.setState({
            killed,
        });
    }

    render() {
        return (
            <div className="werewolf-night">
                <Header text={ headerTypes.werewolf } />
                <Role role={ roles.werewolf } />
                <div className="participant">
                    <div className="row">
                        <div className="cell">
                            {this.state.killed === 1 && <img className="killed" src={require('./imgs/killed.png')}/>}
                            <img
                                src='https://lh3.googleusercontent.com/-3KSfzAAh_0I/AAAAAAAAAAI/AAAAAAAAAAA/AFiYof1NxUtRYn0Yiyk7sVURMZmiDMsjbg/s64-c-mo/photo.jpg'
                                onClick={this.avatarClick.bind(this, 1)}
                            />
                            <div>玩家名称</div>
                        </div>
                        <div className="cell">
                            {this.state.killed === 2 && <img className="killed" src={require('./imgs/killed.png')}/>}
                            <img
                                src='https://lh3.googleusercontent.com/-3KSfzAAh_0I/AAAAAAAAAAI/AAAAAAAAAAA/AFiYof1NxUtRYn0Yiyk7sVURMZmiDMsjbg/s64-c-mo/photo.jpg'
                                onClick={this.avatarClick.bind(this, 2)}
                            />
                            <div>玩家名称</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="cell">
                            {this.state.killed === 3 && <img className="killed" src={require('./imgs/killed.png')}/>}
                            <img
                                src='https://lh3.googleusercontent.com/-3KSfzAAh_0I/AAAAAAAAAAI/AAAAAAAAAAA/AFiYof1NxUtRYn0Yiyk7sVURMZmiDMsjbg/s64-c-mo/photo.jpg'
                                onClick={this.avatarClick.bind(this, 3)}
                            />
                            <div>玩家名称</div>
                        </div>
                        <div className="cell">
                            {this.state.killed === 4 && <img className="killed" src={require('./imgs/killed.png')}/>}
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

export default WerewolfNight;
