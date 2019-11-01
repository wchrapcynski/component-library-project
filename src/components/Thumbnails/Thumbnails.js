import React, { Component } from "react";
import "./Thumbnails.css";
import starsImage from "./images/stars.svg";

class Thumbnails extends Component {
  constructor(props) {
    super(props);
    this.state = { stars: parseInt(props.stars) };
    this.thumbtext = props.text
  }
  
  render() {
    return(
        <div className="thumbnails">
            <div className="thumbnail-container">
                <div className="thumbnail-img"></div>
                <div className="thumbnail-desc">{this.thumbtext}</div>
                <div className="rating"><img src={starsImage} alt="logo"/></div>
            </div>
        </div>
    );
  }
}

export default Thumbnails;