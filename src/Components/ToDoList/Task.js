import React, { Component } from "react";

class Task extends Component {
    constructor(props) {
        super();

        this.parentDeleteCallback = props.deleteCallback
        this.parentUpdateCallback = props.updateCallback
    }

    deleteTask(e) {
        // console.log(this.props.task);
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
        // console.log("task.isDone === 'false'", task.isDone === false);
        // if (task.isDone === false) {

        //     task.isDone = true
        //     console.log( task.isDone);
        // }

        // if (task.isDone === true) {
        //     task.isDone = false
        // }
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
