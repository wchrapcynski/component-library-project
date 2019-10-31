import React from "react";
import "./Forms.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Forms = props => {
    let classList = "";
    let types = [
        "email"
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
  
  return (
    <div className="text">
        {props.label}
        <br />
        <input type={props.label} placeholder={props.label} className={classList} />
    </div>
  );
};

export default Forms;
