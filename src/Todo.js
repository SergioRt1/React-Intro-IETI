import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3>{this.props.priority} {this.props.text} {this.props.dueDate}</h3>
        );
    }
}