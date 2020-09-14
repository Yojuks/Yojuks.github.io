import React, { Component } from "react";
import "./ToDoList.css";
import Task from './Task'
import ToDoListFooter from './TodoListFooter'
import TodoListTaskCreator from "./TodoListTaskCreator";

class ToDoList extends Component {
  constructor(props) {
    super();
    this.newIndex = 2
  
    this.state = {
      tasks: [
        {
          id: 0,
          title: "learn js",
          isdone: false,
        },
        {
          id: 1,
          title: "learn react",
          isdone: false,
        }
      ]
    }

  }

  createNewTask(task) {
      this.setState({
        tasks: [...this.state.tasks, task] 
      })
   }
  
  deleteTask(task) {
    const newTaskList = this.state.tasks.filter((t) => {
      return t !== task;
    });
    this.setState({
      tasks: newTaskList
      })
  }
    
  render() {
    return (
      <div className="todolist">
       <TodoListTaskCreator onCreate={this.createNewTask.bind(this)}/>
        <div className="tasks">
          {this.state.tasks.map((task, id) => {
            return <Task task={task} deleteCallback={this.deleteTask.bind(this)} key={task.id} />
          })}
        </div>
        <ToDoListFooter/>
      </div>
    );
  }
}

export default ToDoList;
