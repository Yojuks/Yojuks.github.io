import React, { Component } from "react";

class TodoListTaskCreator extends Component {
    
  constructor(props) {
    super(props);
  }

  createNewTask(e) {

    if (e.key === "Enter") {

      const data = new URLSearchParams();
      data.append('widgetId', 53236)
      data.append('title', e.currentTarget.value)
      const newTaskInput = e.currentTarget

    fetch("https://repetitora.net/api/JS/Tasks", 
    {
      method: "POST",
      body: data,
      headers: {
        'content-type': 'application/x-www-form-unlencoded: charset=UTF-8', 
        'accept': 'application/json'
      },
      mode: 'no-cors'
    })
      .then(result => result.json() )
      .then((data) => {
      const newTask = {
        id: data.task.id,
        title: data.task.title,
        isDone: data.task.done 
      }

        this.props.onCreate(newTask)
        newTaskInput.value = ''
        console.log(data);
      })
    }
}
 
  render() {
    return (
        <div className="header">
          <input onKeyPress={this.createNewTask.bind(this)} />
        </div>
    );
  }
}

export default TodoListTaskCreator;

