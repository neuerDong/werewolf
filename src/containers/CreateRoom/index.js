/**
 * External dependencies
 */
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

/**
 * Internal dependencies
 */
import Header from '../../components/Header';
import { headerTypes } from '../../config/headerTypes';
import * as category from '../../config/category';
import './styles.less';

class CreateRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: category.CATEGORY_4,
        };
        this.createRoom = this.createRoom.bind(this);
    }

    categoryClick(category) {
        this.setState({
            category,
        });
    }

    createRoom() {
        const params = {
            isGameOwner: true,
        };

        browserHistory.push({pathname: '/readiness', state: params});
    }

    render () {
        return (
            <div className="room">
                <Header text={ headerTypes.room } />
                <div>
                    <div className="category-title">
                        人数设定
                    </div>
                    <div className="category-button">
                        <span
                            onClick={this.categoryClick.bind(this, 4)}
                            className={this.state.category === category.CATEGORY_4 ? 'selected' : ''}
                        >
                            4人局
                        </span>
                        <span
                            onClick={this.categoryClick.bind(this, 6)}
                            className={this.state.category === category.CATEGORY_6 ? 'selected' : ''}
                        >
                            6人局
                        </span>
                        <span
                            onClick={this.categoryClick.bind(this, 8)}
                            className={this.state.category === category.CATEGORY_8 ? 'selected' : ''}
                        >
                            8人局
                        </span>
                    </div>
                    <div className="attention">
                        注意：创建房间后,参与者扫取屏幕二维码加入游戏
                    </div>
                </div>
                <img
                    className="create-room-button"
                    src={require('./imgs/create-room-button.png')}
                    onClick={this.createRoom}
                />
            </div>
        );
    }
}

export default CreateRoom;
