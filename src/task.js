import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, deleteItem } from "./actions";
import List from "./list";
class Task extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>ADD Task</h1>
        <input id="txt" />
        <button onClick={this.props.addToDoTask}>ADD</button>
        <List name={this.props.tasks} delete={this.props.deleteToDoTask} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: [...state]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToDoTask: () => {
      const name = document.querySelector("#txt").value;
      dispatch(addItem(name));
    },
    deleteToDoTask: id => {
      dispatch(deleteItem(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
