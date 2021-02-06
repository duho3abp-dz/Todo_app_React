import React, { Component } from 'react';

export default class AddItem extends Component {
    state = {
        value: ''
    }

    changeValue = e => this.setState({ value: e.target.value });

    submitTodo = value => {
        this.props.addTodo(value);
        this.setState({ value: '' });
    }

    render() {
        
        const { value } = this.state;

        return (<>
            <input type="text" 
                   value={ value }
                   onChange={ this.changeValue }/>

            <button type="button" 
                    onClick={ () => this.submitTodo(value) }
                    >Add
            </button>
        </>);
    }
}