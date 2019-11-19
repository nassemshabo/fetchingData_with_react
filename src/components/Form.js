import React from "react";

import "./style.component.css";

const Form = props => {
  return (
    <div className="nav">
      <h1>search for your Movie </h1>
      <form onSubmit={props.getData}>
        <input type="input" name="input" placeholder="search for movie" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Form;
