import React, { Component } from 'react';
import './App.css';

import Slider from './components/Slider/Slider'


class App extends Component {
  constructor(props) {
      super(props);
      this.sliedrOneSpead = 5000;
      this.sliedrTwoSpead = 2500;
      this.sliderOne = [
          {
              desc: 'First slide',
              url: 'https://media.istockphoto.com/photos/sunrise-on-yosemite-valley-picture-id505872990?k=6&m=505872990&s=612x612&w=0&h=XcdHhkC9PF9-saYT6n_GQD-0Hf8dbI_Q4wfYlZZGpNk='
          },
          {
              desc: 'Second slide',
              url: 'https://www.nature.com/polopoly_fs/7.44180.1495028629!/image/WEB_GettyImages-494098244.jpg_gen/derivatives/landscape_630/WEB_GettyImages-494098244.jpg'
          },
          {
              desc: 'Third slide',
              url: 'https://www.iaspaper.net/wp-content/uploads/2017/10/Essay-on-Nature.jpg'
          }
      ];
  }

  render() {
    return (
        <div className="container">
          <Slider spead={this.sliedrOneSpead} slides={this.sliderOne} />
          <br/>
          <Slider spead={this.sliedrTwoSpead} slides={this.sliderOne} />
        </div>
    );
  }
}


export default App;
