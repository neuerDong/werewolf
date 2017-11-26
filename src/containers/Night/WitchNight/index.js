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
                <div>
                    <img src={require('../imgs/dying-message.png')} className="dying-message" />
                </div>
                <div className="buttons">
                    <span>
                        <Button buttonType={ buttonTypes.save } />
                    </span>
                    <span>
                        <Button buttonType={ buttonTypes.unSave } />
                    </span>
                </div>
                {/*<div className="participant">
                    <div className="row">
                        <div className="cell">
                            <img src='https://lh3.googleusercontent.com/-3KSfzAAh_0I/AAAAAAAAAAI/AAAAAAAAAAA/AFiYof1NxUtRYn0Yiyk7sVURMZmiDMsjbg/s64-c-mo/photo.jpg' />
                            <div>玩家名称</div>
                        </div>
                        <div className="cell">
                            <img src='https://lh3.googleusercontent.com/-3KSfzAAh_0I/AAAAAAAAAAI/AAAAAAAAAAA/AFiYof1NxUtRYn0Yiyk7sVURMZmiDMsjbg/s64-c-mo/photo.jpg' />
                            <div>玩家名称</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="cell">
                            <img src='https://lh3.googleusercontent.com/-3KSfzAAh_0I/AAAAAAAAAAI/AAAAAAAAAAA/AFiYof1NxUtRYn0Yiyk7sVURMZmiDMsjbg/s64-c-mo/photo.jpg' />
                            <div>玩家名称</div>
                        </div>
                        <div className="cell">
                            <img src='https://lh3.googleusercontent.com/-3KSfzAAh_0I/AAAAAAAAAAI/AAAAAAAAAAA/AFiYof1NxUtRYn0Yiyk7sVURMZmiDMsjbg/s64-c-mo/photo.jpg' />
                            <div>玩家名称</div>
                        </div>
                    </div>
                </div>*/}
            </div>
        )
    }
}

export default WitchNight;
