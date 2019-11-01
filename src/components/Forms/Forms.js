import React from "react";
import "./Forms.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Forms = props => {
    let classList = "";
    let types = [
        "email",
        "select",
        "counter",
        "textAndutton"
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

    let counterNum = 1;
    
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
  } else if (props.type === "counter") {
    return (
      <div className="form">
        <div className={props.type}>
          <span className="minus">-</span>
          <span className="number">{counterNum}</span>
          <span className="plus">+</span>
        </div>
      </div>
    );
  } else if (props.type === "textAndutton") {
    return (
      <div className="form">
        <form action={props.action}>
          <input type="text" name={props.data} className={props.submitText} placeholder={props.placeholder}></input>
          <input type="submit" value={props.value} className={props.submitButton}></input>
        </form>
      </div>
    );
  }
};

export default Forms;
