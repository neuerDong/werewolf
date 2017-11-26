/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import './styles.less';

function Header (props) {
    return (
        <div className="head">
            <img src={require(`./imgs/${props.text}.png`)} className="text" />
        </div>
    )
}

export default Header;
