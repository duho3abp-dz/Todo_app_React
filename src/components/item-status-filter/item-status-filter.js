import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    buttons = [
        { value: 'All', key: 'All' },
        { value: 'Active', key: 'Active' },
        { value: 'Done', key: 'Done' }
    ]

    render() {
        const { setStatus, status } = this.props;

        const buttons = this.buttons.map(({ value, key }) => {
            const className = value === status ? 'btn-light' : 'btn-secondary';
            return (
                <button type="button" 
                        key={ key } 
                        className={ `btn ${ className }` }
                        onClick={ () => setStatus(value) }
                        >{ value }
                </button>
            )
        });

        return (
            <div className="item-status-filter btn-group">
                    { buttons }
            </div>
        );
    }
}