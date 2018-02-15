import React, { Component } from 'react'

export default class Counter extends Component {
  render () {
    return (
      <div>
        <p>{this.props.title}</p>
        <button onClick={() =>this.props.incrementCount()}>+</button>
        {this.props.count}
        <button onClick={() => this.props.decrementCount()}>-</button>
      </div>
    )
  }
}