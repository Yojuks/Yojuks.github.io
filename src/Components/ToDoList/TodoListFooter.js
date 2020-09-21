import React, { Component } from "react";

class ToDoListFooter extends Component {
  // constructor (props) {
  //     super(props)
  // }

  handleFilterChanged(e) {
      this.props.onFilterChanged(e.currentTarget.dataset.value)
  }

  render() {
    let {tasks, filter} = this.props
    return (
      <div className="todolist-footer">
        <div>
          <span>
            {tasks.filter((t) => !t.isDone).length} items left{" "}
          </span>
        </div>
        <div className="buttons">
          <button
            className={filter.value === 'all' ? 'selected' : ""}
            onClick={this.handleFilterChanged.bind(this)}
            data-value="all"
          >
            All
          </button>
          <button
            className={filter.value === 'active' ? 'selected' : ""}
            onClick={this.handleFilterChanged.bind(this)}
            data-value="active"
          >
            Active
          </button>
          <button
            className={filter.value === 'completed' ? 'selected' : ""}
            onClick={this.handleFilterChanged.bind(this)}
            data-value="completed"
          >
            Completed
          </button>
        </div>
        <div>
            <span onClick={this.props.clearCompleted}>Clear completed</span> 
        </div>
      </div>
    );
  }
}

export default ToDoListFooter;
