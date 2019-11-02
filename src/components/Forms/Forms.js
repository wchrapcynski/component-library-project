import React, { Component } from "react";
import "./Forms.css";

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.classList = "";
        this.classCheckbox = "checkbox-container ";
        this.classCheckmark = "checkmark "
        this.types = [ "email", "select", "counter", "textAndutton", "checkbox" ];
    }

    render() {
        if (this.types.includes(this.props.type)) {
            this.classList += ` forms-${this.props.type}`;
        }
        if (this.props.mediumsize) {
            this.classList += " forms-medium-size"
        }
        if (this.props.largesize) {
            this.classList += " forms-large-size";
        }
        if (this.props.medselect) {
            this.classList += " medselect"
        }
        if (this.props.largeselect) {
            this.classList += " largeselect";
        }
        if (this.props.filledselect) {
            this.classList += " filled-select";
        }
        if (this.props.checkboxBlue) {
            this.classCheckbox += " checkbox-container-blue";
            this.classCheckmark += " checkmark-blue";
        }

        let counterNum = 1;

        if (this.props.type === "email") {
            return (
                <div className="form">
                    <p className={this.props.text}>{this.props.label}</p>
                    <input type={this.props.label} placeholder={this.props.label} className={this.classList}
                    />
                </div>
            );
        } else if (this.props.type === "select") {
            return (
                <div className="form">
                    <select name="selectList" form="selectForm" className={this.classList}>
                        <option value="select1">{this.props.selecttext}</option>
                    </select>
                </div>
            );
        } else if (this.props.type === "counter") {
            return (
                <div className="form">
                    <div className={this.props.type}>
                        <span className="minus">-</span>
                        <span className="number">{counterNum}</span>
                        <span className="plus">+</span>
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
                    <label className={this.classCheckbox}>
                        <input type={this.props.type} class={this.props.type} />
                        <span className={this.classCheckmark}></span>
                        <div>{this.props.checkboxText}</div>
                    </label>
                </div>
            );
        }
    }
}

export default Forms;