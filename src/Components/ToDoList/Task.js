import React, { Component } from "react";

class Task extends Component {
    constructor(props) {
        super(props);

        this.parentDeleteCallback = props.deleteCallback
        this.parentUpdateCallback = props.updateCallback
    }

    deleteTask(e) {
        this.parentDeleteCallback(this.props.task.id);
    }

    toggleTaskStatus (e) {
    //     let newTask = {
    //         ...this.state.task,
    //         isDone: !this.state.task.isDone
    //     }
        var task = {
            ...this.props.task
        }

        task.isDone = !task.isDone

        this.parentUpdateCallback(task)
    }

    render() {
        return (
            <div className={this.props.task.isDone ? 'task done' : 'task'}>
                <input type="checkbox" checked={this.props.task.isDone} onClick={this.toggleTaskStatus.bind(this)} />
                {this.props.task.title}
                <span className="delete" onClick={this.deleteTask.bind(this)}>x</span>
            </div>
        );
    }
}

export default Task;
