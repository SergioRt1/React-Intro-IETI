import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todos = this.props.todoList;
        const list = todos.map((todo) =>
            <li >
                <Todo text={todo.text}  dueDate={todo.dueDate} priority={todo.priority.toString}/>
           </li>
        );
        return (
            <ul>{list}</ul>
        );
    }

}