import React from "react";
import { connect } from "react-redux";

const List = props => {
  console.log(props);

  return (
    <ol>
      {props.tasks.map(r => (
        <li key={r.id}>
          {" "}
          {r.name} <button onClick={() => props.delete(r.id)}>Delete</button>
        </li>
      ))}
    </ol>
  );
};

const mapStateToProps = state => {
  return {
    tasks: [...state]
  };
};

export default connect(mapStateToProps)(List);
