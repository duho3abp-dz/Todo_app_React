import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    state = {
        activeButton: 'All'
    }

    filterItems = e => {
        const button = e.target;
        const clickButton = button.textContent; 

        this.setState({ activeButton: clickButton });
        this.props.setStatus(clickButton);
    }

    render() {
        const { activeButton } = this.state;

        const allClasses = activeButton === 'All' ? 'btn btn-light' : 'btn btn-secondary' ;
        const activeClasses = activeButton === 'Active' ? 'btn btn-light' : 'btn btn-secondary' ;
        const doneClasses = activeButton === 'Done' ? 'btn btn-light' : 'btn btn-secondary' ;

        return (
            <div className="item-status-filter btn-group"
                onClick={ this.filterItems }>

                <button type="button" className={ allClasses }>All</button>
                <button type="button" className={ activeClasses }>Active</button>
                <button type="button" className={ doneClasses }>Done</button>
            </div>
        );
    }
}