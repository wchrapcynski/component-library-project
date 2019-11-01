import React, { Component } from "react";
import "./Thumbnails.css";
import starsYellow from "./images/star-yellow.svg";

class Thumbnails extends Component {
  constructor(props) {
    super(props);
    this.state = { stars: parseInt(props.stars) };
    this.thumbtext = props.text
  }
  
  render() {
    console.log(this.state.starsImages)
    return(
        <div className="thumbnails">
            <div className="thumbnail-container">
                <div className="thumbnail-img"></div>
                <div className="thumbnail-desc">{this.thumbtext}</div>
                <div className="rating">{this.state.starsImages}</div>
            </div>
        </div>
    );
  }
}

export default Thumbnails;