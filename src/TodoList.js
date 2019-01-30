import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todos = this.props.items;
        const list = todos.map((todo) =>
            <Todo text={todo.text} priority={todo.priority} dueDate={todo.dueDate}  />
        );
        return (
            <ul>{list}</ul>
        );
    }

}