import React from "react";
import "./Forms.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Forms = props => {
    let classList = "";
    let types = [
        "email",
        "select"
    ];
    if (types.includes(props.type)) {
        classList += ` forms-${props.type}`;
    }
    if (props.mediumsize) {
        classList += " forms-medium-size"
    }
    if (props.largesize) {
      classList += " forms-large-size";
    }
    if (props.medselect) {
      classList += " medselect"
    }
    if (props.largeselect) {
      classList += " largeselect";
    }
    if (props.filledselect) {
      classList += " filled-select";
    }
    
  
  if(props.type === "email") {
    return (
      <div className="form">
        <p className={props.text}>{props.label}</p>
        <input type={props.label} placeholder={props.label} className={classList}
        />
      </div>
    );
  } else if (props.type === "select") {
    return (
      <div className="form">
        <select name="selectList" form="selectForm" className={classList}>
          <option value="select1">{props.selecttext}</option>
        </select>
      </div>
    );
  }
};

export default Forms;
