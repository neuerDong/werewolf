/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import Header from '../../components/Header';
import './styles.less';

class Frame extends Component {
    render() {
        return (
            <div className="bg">
                <Header />
            </div>
        );
    }
}

export default Frame;
