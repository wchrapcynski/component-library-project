import React from 'react';
import './Button.css'
import cart from './images/cart.svg'

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    let classList = ""
    let types = [
      "primary",
      "danger",
      "success",
      "warning",
      "default",
      "primary-lighter",
      "danger-lighter",
      "success-lighter",
      "warning-lighter",
      "default-lighter",
      "cart"
    ];
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    if (props.large) {
        classList += ' button-large';
    }
    if (props.outline) {
      classList += ' button-outline';
    }
    if (props.cartimage) {
      classList += ' button-cartimage';
    }
    if (props.heartimage) {
      classList += ' button-heartimage';
    }
    return (
      <button className={classList} onClick={props.onClick}>
        {props.label}
      </button>
    );
}

export default Button;