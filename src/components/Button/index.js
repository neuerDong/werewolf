/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import './styles.less';

function Button (props) {
    return (
        <span className="button">
            <img src={require(`./imgs/${props.buttonType}.png`)} />
        </span>
    );

}

export default Button;
