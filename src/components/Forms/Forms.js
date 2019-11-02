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
        return (
            <div className="Form">
                test
            </div>
        );
    }
}

export default Forms;