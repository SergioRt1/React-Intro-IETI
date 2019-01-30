import React from 'react';
import {TodoList} from "./TodoList";

export class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], text: '',priority:'',dueDate:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h2>TODO</h2>

                <TodoList items={this.state.items}/>
                <form onSubmit={this.handleSubmit} className="form-horizontal">
                    <h4>{this.state.priority +" "+this.state.text +" "+ this.state.dueDate}</h4>
                    <label htmlFor="new-todo">
                        What needs to be done?
                    </label>
                    <select
                        id="priority"
                        onChange={(e)=> this.setState({priority:e.target.value})}
                        value = {this.state.priority}
                        className="form-control"

                    >
                        <option value="" disabled selected>Priority</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                        placeholder="Text..."
                        className="form-control"
                    />
                    <input
                        id="date"
                        type="date"
                        onChange={(e)=> this.setState({dueDate:e.target.value})}
                        value={this.state.dueDate}
                        placeholder="TODO"
                        className="form-control"
                    />
                    <button className="btn btn-default">
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
                <br/>
                <a
                    className="App-link"
                    href="https://github.com/SergioRt1/React-Intro-IETI"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    By SergioRt
                </a>
            </div>
        );
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({text:e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now(),
            priority: this.state.priority,
            dueDate: this.state.dueDate,
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority : '',
            dueDate: ''
        }));
    }
}