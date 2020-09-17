import React, { Component } from "react";
import "./ToDoList.css";
import ToDoListFooter from './TodoListFooter'
import TodoListTaskCreator from "./TodoListTaskCreator";
import TasksList from './TasksList'

class ToDoList extends Component {
  constructor() {
    super();
   
  
    this.state = {
      tasks: [
        {
          id: 0,
          title: "learn js",
          isDone: false,
        },
        {
          id: 1,
          title: "learn react",
          isDone: false,
        }
      ]
    }

  }

  createNewTask(task) {
      this.setState({
        tasks: [...this.state.tasks, task] 
      })
   }
  
  deleteTask(taskId) {
    const newTaskList = this.state.tasks.filter((t) => {
      return t.id !== taskId;
    });
    this.setState({
      tasks: newTaskList
      })
  }

    updateTask(task) {
    const newTaskList = [...this.state.tasks]

    newTaskList.forEach( (t) => {

      if (t.id === task.id) {
        t.isDone = task.isDone
        return
      } 
    })
    this.setState({
      tasks: newTaskList
      })
  }
    
  render() {
    return (
      <div className="todolist">
       <TodoListTaskCreator onCreate={this.createNewTask.bind(this)}/>
       
       <TasksList 
          tasks={this.state.tasks} 
          onDelete={this.deleteTask.bind(this)}
          onUpdate={this.updateTask.bind(this)}/>
        <ToDoListFooter/>
      </div>
    );
  }
}

export default ToDoList;
