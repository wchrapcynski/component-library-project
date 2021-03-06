import React, { Component } from "react";
import "./Thumbnails.css";
import Button from "../Button/Button"

class Thumbnails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: parseInt(props.stars),
      thumbImage: props.image, salePrice: props.salePrice, retailPrice: props.retailPrice, heartImage: props.heartImage,
      cartImage: props.cartImage, thumbtext: props.text
    };
  }

  // Shows star ratings
  starDisplay = (name) => {
    return (
      <div className={name}>
        <div className={this.state.stars >=1 ? "star-yellow" : "star-gray"}></div>
        <div className={this.state.stars >=2 ? "star-yellow" : "star-gray"}></div>
        <div className={this.state.stars >=3 ? "star-yellow" : "star-gray"}></div>
        <div className={this.state.stars >=4 ? "star-yellow" : "star-gray"}></div>
        <div className={this.state.stars >=5 ? "star-yellow" : "star-gray"}></div>
      </div>
    )
  }

  render() {
    // Vertical Blocks colors, icons, and images are set by props in the story
    if (this.props.type === "blockv") {
      return (
        <div className="thumbnails">
          <div
            className={
              this.props.backgroundFilled
                ? "thumbnail-filled thumbnail-container-v"
                : "thumbnail-container-v"
            }
          >
            <div className="thumbnail-img">
              <img
                src={require(`./images/${this.state.thumbImage}.png`)}
                width="236"
                alt=""
              />
            </div>
            <div className="buttons">
              <img
                src={require(`./images/${this.state.heartImage}.svg`)}
                alt=""
              />
              <span className="space"></span>
              <img
                src={require(`./images/${this.state.cartImage}.svg`)}
                alt=""
              />
            </div>
            <div className="thumbnail-bottom">
              <div
                className={
                  this.props.backgroundFilled
                    ? "thumbnail-desc thumbnail-desc-dark"
                    : "thumbnail-desc"
                }
              >
                {this.state.thumbtext}
              </div>
              {this.starDisplay("rating")}
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
          <div className="thumbnail-container-h">
            <div className="thumbnail-img-h">
              <img
                src={require(`./images/${this.state.thumbImage}.png`)}
                width="236"
                alt=""
              />
            </div>
            <div className="thumbnail-bottom-h">
              <div className="thumbnail-desc-h">{this.state.thumbtext}</div>
              {this.starDisplay("rating-h")}
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
            <img
              src={require(`./images/${this.state.thumbImage}.png`)}
              alt=""
            />
            <div className="thumb-small-right">
              <div className="thumbnail-desc-small">{this.state.thumbtext}</div>
              {this.starDisplay("rating-small")}
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
    if (this.props.type === "inline") {
      return (
        <div className="thumbnails">
          <div className="thumbnail-container-inline">
            <div
              className={
                this.props.hot
                  ? "thumbnail-img-inline thumbnail-img-inline-hot"
                  : "thumbnail-img-inline"
              }
            >
              <img
                src={require(`./images/${this.state.thumbImage}.png`)}
                width="236"
                alt=""
              />
            </div>
            <div className="thumbnail-inline-right">
              <div className="thumbnail-desc-inline">
                {this.state.thumbtext}
              </div>
              <div className="thumbnail-inline-rating-review">
                {this.starDisplay("rating-inline")}
                <span className="thumbnail-review">0 reviews</span>
                <span className="thumbnail-submitReview">Submit a review</span>
              </div>
              <div className="thumbnail-bottom-inline">
                <hr></hr>
                <div className="price-h">
                  <span className="sale">${this.state.salePrice}</span>
                  <span className="space"></span>
                  <span className="retail">${this.state.retailPrice}</span>
                </div>
                <div className="thumbnail-inline-large-desc">
                  Nunc facilisis sagittis ullamcorper. Proin lectus ipsum,
                  gravida et mattis vulputate, tristique ut lectus. Sed et
                  lectus lorem nunc leifend laorevtr istique et congue. Vivamus
                  adipiscin vulputate g nisl ut dolor ...
                </div>
                <div className="thumbnail-inline-buttons">
                  <Button label="Add to Cart" type="cart" cartimage />
                  <div className="space"></div>
                  <Button label=" " type="cart-notext" heartimage />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Thumbnails;