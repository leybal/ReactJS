import React, { Component } from 'react';
import './Slide.css';


export default class Slide extends Component {
  render() {
    const { url, desc, currentSlide, i } = this.props;
    let liStyle;
    if (currentSlide === i) {
      liStyle = { display: "inline-block"};
    } else {
      liStyle = { display: "none"};
    }
    return (
      <li style={liStyle}>
        <img src={url} alt={desc}/>
        <span className="description">{desc}</span>
      </li>
  );
  }
}
