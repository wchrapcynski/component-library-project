import React, { Component } from "react";
import "./Forms.css";

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = { types: ["email", "select", "counter", "textAndutton", "checkbox"], classList: "", 
            classCheckbox: "checkbox-container ", classCheckmark: "checkmark ", 
            counterNum: parseInt(props.starting), counterMax: parseInt(props.max), counterMin: parseInt(props.min), countBy: parseInt(props.by),
            isChecked: props.isChecked
        };
    }

    counterAdd = () => {
        if(this.state.counterNum + this.state.countBy < this.state.counterMax) {
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
        if (this.props.mediumsize) {
            this.state.classList += " forms-medium-size"
        }
        if (this.props.largesize) {
            this.state.classList += " forms-large-size";
        }
        if (this.props.medselect) {
            this.state.classList += " medselect"
        }
        if (this.props.largeselect) {
            this.state.classList += " largeselect";
        }
        if (this.props.filledselect) {
            this.state.classList += " filled-select";
        }
        if (this.props.checkboxBlue) {
            this.state.classCheckbox += " checkbox-container-blue";
            this.state.classCheckmark += " checkmark-blue";
        }

        if (this.props.type === "email") {
            return (
                <div className="form">
                    <p className={this.props.text}>{this.props.label}</p>
                    <input type={this.props.label} placeholder={this.props.label} className={this.state.classList}
                    />
                </div>
            );
        } else if (this.props.type === "select") {
            return (
                <div className="form">
                    <select name="selectList" form="selectForm" className={this.state.classList}>
                        <option value="select1">{this.props.selecttext}</option>
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
                    <label className={this.state.classCheckbox} >
                        <input type={this.props.type} className={this.props.type} onChange={this.checkbox} checked={this.state.isChecked} />
                        <span className={this.state.classCheckmark}></span>
                        <div>{this.props.checkboxText}</div>
                    </label>
                </div>
            );
        }
    }
}

export default Forms;