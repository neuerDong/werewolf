/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import { roles } from '../../config/roles';
import './styles.less';

function Roles (props) {
    return (
        <div className="roles">
            <img src={require(`./imgs/${props.role.name}.png`)} className="avatar" />
            {props.role.name !== roles.placeholder.name && (
                <div className="description">
                    <div>身份说明：</div>
                    <div className="text">
                        {props.role.description.map((ele, index) => {
                            return <div key={index}>{ele}</div>;
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Roles;
