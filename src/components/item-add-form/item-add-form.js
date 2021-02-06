import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
    state = {
        value: ''
    }

    changeValue = e => this.setState({ value: e.target.value });

    submitTodo = value => {
        if (!value) return;
        this.props.addTodo(value);
        this.setState({ value: '' });
    }

    render() {
        
        const { value } = this.state;

        return (
            <div className="item-add-form">
                <input type="text" 
                    value={ value }
                    onChange={ this.changeValue }
                    className="item-add-form-input form-control" />

                <button type="button" 
                        onClick={ () => this.submitTodo(value) }
                        className="item-add-form-btn btn btn-secondary"
                        >Add
                </button>
            </div>
        );
    }
}