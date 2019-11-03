import React, { Component } from "react";
import "./Thumbnails.css";

class Thumbnails extends Component {
  constructor(props) {
    super(props);
    this.state = { stars: parseInt(props.stars), starImages: ["star-gray", "star-gray", "star-gray", "star-gray", "star-gray"],
    thumbImage: props.image, salePrice: props.salePrice, retailPrice: props.retailPrice
  };
    this.thumbtext = props.text
  }

  render() {
    // sets the color of the stars from props
    if( this.state.stars >= 5) {
      for (let i = 0; i < 5; i++) {
        this.state.starImages[i] = "star-yellow"
      }
    } else {
      for (let i = 0; i < this.state.stars; i++) {
        this.state.starImages[i] = "star-yellow"
      }
    } 
    if (this.props.type === "block1") {
      return(
          <div className="thumbnails">
              <div className="thumbnail-container">
                  <div className="thumbnail-img"><img src={require(`./images/${this.state.thumbImage}.png`)} width="236" /></div>
                  <div className="buttons">
                    <img src={require(`./images/heartcircle1.svg`)} />
                    <span className="space"></span>
                    <img src={require(`./images/cartcircle1.svg`)} />
                  </div>
                  <div className="thumbnail-bottom">
                    <div className="thumbnail-desc">{this.thumbtext}</div>
                    <div className="rating">
                      <div className={this.state.starImages[0]}></div>
                      <div className={this.state.starImages[1]}></div>
                      <div className={this.state.starImages[2]}></div>
                      <div className={this.state.starImages[3]}></div>
                      <div className={this.state.starImages[4]}></div>
                    </div>
                    <div className="price">
                      <span className="sale">${this.state.salePrice}</span>
                      <span className="space"></span>
                      <span className="retail">${this.state.retailPrice}</span>
                    </div>
                  </div>
              </div>
          </div>
      );
    }
  }
}

export default Thumbnails;