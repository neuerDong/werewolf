/**
 * External dependencies
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 * Internal dependencies
 */
import './styles.less';

class Frame extends Component {
    render() {
        return (
            <div style={{ fontSize: 18, textAlign: 'center' }}>
                <br/><br/><br/>
                <div>
                    <Link to="create-room">包厢狼人杀</Link>
                </div>
                <br/>
                <div>
                    <Link to="readiness">等待分配身份</Link>
                </div>
                <br/>
                <div>
                    <Link to="daytime">白天（不同角色展示不同页面，以狼人为例）</Link>
                </div>
                <br/>
                <div>
                    <Link to="guard-night">守卫夜晚</Link>
                </div>
                <br/>
                <div>
                    <Link to="werewolf-night">狼人夜晚</Link>
                </div>
                <br/>
                <div>
                    <Link to="witch-night">女巫夜晚</Link>
                </div>
                <br/>
                <div>
                    <Link to="villager-night">村名夜晚</Link>
                </div>
            </div>
        );
    }
}

export default Frame;
