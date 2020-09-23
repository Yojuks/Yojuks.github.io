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
      ],
      filter: 'all'
    }
    debugger
    fetch("https://repetitora.net/api/JS/Tasks?widgetId=53236&count=30", 
    {
      method: "GET",
      headers: {
        'content-type': 'application/x-www-form-unlencoded: charset=UTF-8', 
        'accept': 'application/json'
      },
      mode: 'no-cors'
    })
      .then(result => result.json() )
      .then(tasksFromServer => {

        let tasks = tasksFromServer.map(itemFromServer => {
          return {
            id: itemFromServer.id,
            title: itemFromServer.title,
            done: itemFromServer.done
          }
        })
          this.setState({
            tasks: tasks
          })
      })
  }
  

  clearCompleted() {
    this.setState({
      tasks: this.state.tasks.filter((t) => !t.isDone)
    })
  }

  changeFilter(filterValue) {
    this.setState({
      filter: filterValue
    })
  }

  putTaskToState(task) {
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
    let {tasks, filter} = this.state

    let filteredTasks = []

    if (filter === 'all') filteredTasks = tasks
    if (filter === 'active') filteredTasks = tasks.filter((task) => !task.isDone)
    if (filter === 'completed') filteredTasks = tasks.filter((task) => task.isDone)

    return (
      <div className="todolist">
       <TodoListTaskCreator onCreate={this.putTaskToState.bind(this)}/>
       
       <TasksList 
          tasks={filteredTasks} 
          onDelete={this.deleteTask.bind(this)}
          onUpdate={this.updateTask.bind(this)}/>
        <ToDoListFooter 
          tasks={tasks} 
          filter={filter} 
          onFilterChanged={this.changeFilter.bind(this)}
          clearCompleted={this.clearCompleted.bind(this)}
          />
      </div>
    );
  }
}

export default ToDoList;
