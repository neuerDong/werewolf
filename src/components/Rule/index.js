/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import './styles.less';

function Rule () {
    return (
        <div className="rule">
            <div className="description">
                <div>游戏规则介绍：</div>
                <div className="text">
                    <div>本局为四人局狼人杀，有村民、狼人、女巫、守卫各一名；当场上仅剩一名好人时，即狼人获胜，狼人出局则好人阵营胜利。</div>
                </div>
            </div>
        </div>
    );
}

export default Rule;
