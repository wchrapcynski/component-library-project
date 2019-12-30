import React, { Component } from "react";
import "./Forms.css";

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = { types: ["email", "select", "counter", "textAndutton", "checkbox"], classList: "", 
            counterNum: parseInt(props.starting), counterMax: parseInt(props.max), counterMin: parseInt(props.min), countBy: parseInt(props.by),
            isChecked: props.isChecked
        };
    }

    counterAdd = () => {
        if(this.state.counterNum + this.state.countBy <= this.state.counterMax) {
            this.setState({ counterNum: this.state.counterNum + this.state.countBy })
        }
    }

    counterSub = () => {
        if (this.state.counterNum - this.state.countBy > this.state.counterMin) {
            this.setState({ counterNum: this.state.counterNum - this.state.countBy })
        }
    }

    checkbox = () => {
        if(this.state.isChecked === "") {
            this.setState({isChecked: "checked"})
        } else {
            this.setState({ isChecked: "" })
        }
    }

    render() {
        if (this.state.types.includes(this.props.type)) {
            this.state.classList += ` forms-${this.props.type}`;
        }

        if (this.props.type === "email") {
            return (
                <div className="form">
                    <p className={this.props.text}>{this.props.label}</p>
                    <input type={this.props.label} placeholder={this.props.label} className={
                        this.props.mediumsize ? "forms-medium-size" : "" ||
                        this.props.largesize ? "forms-large-size" : ""
                    }
                    />
                </div>
            );
        } else if (this.props.type === "select") {
            return (
                <div className="form">
                    <select name="selectList" form="selectForm" className={
                        (this.props.medselect ? "medselect" : "" ||
                        this.props.largeselect ? "largeselect" : "") +
                        (this.props.filledselect ? " filled-select" : "")
                    }>
                        <option value="select1">{this.props.selectText}</option>
                    </select>
                </div>
            );
        } else if (this.props.type === "counter") {
            return (
                <div className="form">
                    <div className={this.props.type}>
                        <span className="minus" onClick={this.counterSub}>-</span>
                        <span className="number">{this.state.counterNum}</span>
                        <span className="plus" onClick={this.counterAdd}>+</span>
                    </div>
                </div>
            );
        } else if (this.props.type === "textAndutton") {
            return (
                <div className="form">
                    <form action={this.props.action}>
                        <input type="text" name={this.props.data} className={this.props.submitText} placeholder={this.props.placeholder}></input>
                        <input type="submit" value={this.props.value} className={this.props.submitButton}></input>
                    </form>
                </div>
            );
        } else if (this.props.type === "checkbox") {
            return (
              <div className="form">
                <label
                  className={
                    this.props.checkboxBlue
                      ? "checkbox-container checkbox-container-blue"
                      : "checkbox-container"
                  }
                >
                  <input
                    type={this.props.type}
                    className={this.props.type}
                    onChange={this.checkbox}
                    checked={this.state.isChecked}
                  />
                  <span
                    className={
                      this.props.checkboxBlue
                        ? "checkmark checkmark-blue"
                        : "checkmark"
                    }
                  ></span>
                  <div>{this.props.checkboxText}</div>
                </label>
              </div>
            );
        }
    }
}

export default Forms;