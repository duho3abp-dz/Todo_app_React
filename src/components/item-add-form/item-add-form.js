import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
    state = {
        value: ''
    }

    changeValue = e => this.setState({ value: e.target.value });

    submitTodo = e => {
        e.preventDefault();

        const { value } = this.state;
        if (!value) return;

        this.props.addTodo(value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <form className="item-add-form"
                onSubmit={ this.submitTodo }>

                <input type="text" 
                    value={ this.state.value }
                    onChange={ this.changeValue }
                    className="item-add-form-input form-control" />

                <button type="submit" 
                        className="item-add-form-btn btn btn-secondary"
                        >Add</button>
            </form>
        );
    }
}