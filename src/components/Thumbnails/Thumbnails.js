import React, { Component } from "react";
import "./Thumbnails.css";

class Thumbnails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blockClassV: "thumbnail-container-v ", blockClassH: "thumbnail-container-h ", descClass: "thumbnail-desc ", 
      stars: parseInt(props.stars), starImages: ["star-gray", "star-gray", "star-gray", "star-gray", "star-gray"],
      thumbImage: props.image, salePrice: props.salePrice, retailPrice: props.retailPrice, heartImage: props.heartImage,
      cartImage: props.cartImage, thumbtext: props.text
    };
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

    // Adds the correct classes for changing colors of background and horiziontal line
    if (this.props.backgroundFilled) {
      this.state.blockClass += "thumbnail-filled "
      this.state.descClass += "thumbnail-desc-dark "
    }

    // Vertical Blocks colors, icons, and images are set by props in the story
    if (this.props.type === "blockv") {
      return(
          <div className="thumbnails">
              <div className={this.state.blockClassV}>
                  <div className="thumbnail-img"><img src={require(`./images/${this.state.thumbImage}.png`)} width="236" /></div>
                  <div className="buttons">
                    <img src={require(`./images/${this.state.heartImage}.svg`)} />
                    <span className="space"></span>
                    <img src={require(`./images/${this.state.cartImage}.svg`)} />
                  </div>
                  <div className="thumbnail-bottom">
                    <div className={this.state.descClass}>{this.state.thumbtext}</div>
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
    // Horizontal Version
    if (this.props.type === "blockh") {
      return (
        <div className="thumbnails">
          <div className={this.state.blockClassH}>
            <div className="thumbnail-img-h"><img src={require(`./images/${this.state.thumbImage}.png`)} width="236" /></div>
            <div className="thumbnail-bottom-h">
              <div className="thumbnail-desc-h">{this.state.thumbtext}</div>
              <div className="rating-h">
                <div className={this.state.starImages[0]}></div>
                <div className={this.state.starImages[1]}></div>
                <div className={this.state.starImages[2]}></div>
                <div className={this.state.starImages[3]}></div>
                <div className={this.state.starImages[4]}></div>
              </div>
              <div className="price-h">
                <span className="sale">${this.state.salePrice}</span>
                <span className="space"></span>
                <span className="retail">${this.state.retailPrice}</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.type === "blockSmall") {
      return (
        <div className="thumbnails">
          <div className="thumbnail-small">
            <img src={require(`./images/${this.state.thumbImage}.png`)} />
            <div className="thumb-small-right">
              <div className="thumbnail-desc-small">{this.state.thumbtext}</div>
              <div className="rating-small">
                <div className={this.state.starImages[0]}></div>
                <div className={this.state.starImages[1]}></div>
                <div className={this.state.starImages[2]}></div>
                <div className={this.state.starImages[3]}></div>
                <div className={this.state.starImages[4]}></div>
              </div>
              <div className="price-h">
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