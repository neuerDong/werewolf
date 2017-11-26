/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import './styles.less';

function Footer (props) {
    return (
        <div className="footer">
            <img src={require('./imgs/waiting-vote.png')} className="text" />
        </div>
    )
}

export default Footer;
