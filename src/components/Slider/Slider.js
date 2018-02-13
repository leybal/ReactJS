import React, { Component } from 'react';
import './Slider.css';

import Slide  from './Slide/Slide';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.intervalId = 0;

    this.state = {
      currentSlide: 0
    }
  }


  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        currentSlide: this.state.currentSlide + 1
      }, () => {
        this.setCurrentSlide(this.state.currentSlide)
      })
    }, this.props.spead)
  }


  setCurrentSlide = (curr) => {
    const { slides } = this.props;

    if (curr < 0) {
      this.setState({ currentSlide: slides.length -1 })
    } else if (curr > slides.length -1) {
      this.setState({ currentSlide: 0 })
    } else {
      this.setState({ currentSlide: curr })
    }
  };


  slideLeft = () => {
    const { currentSlide } = this.state;

    this.setCurrentSlide(currentSlide - 1)
  };


  slideRight = () => {
    const { currentSlide } = this.state;

    this.setCurrentSlide(currentSlide + 1)
  };

  componentWillUnMount() {
    clearInterval(this.intervalId);
  }


  render() {
    const { slides } = this.props;
    let {currentSlide} = this.state;

    return (
      <div className="slider">
        <span className="control_next" onClick={this.slideRight}>&raquo;</span>
        <span className="control_prev" onClick={this.slideLeft}>&laquo;</span>
        <ul>
          { slides.map((el, i) => {
              return <Slide key={i} url={el.url} desc={el.desc} currentSlide={currentSlide} i={i} />
            })
          }
        </ul>
      </div>
    );
  }
}
