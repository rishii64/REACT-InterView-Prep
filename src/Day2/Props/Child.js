import React, { Component } from 'react'

class Child extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter : this.props.value
        }
    }
  render() {
    return (
      <>
        <h2>Props Data : {this.state.counter}</h2>
        <button onClick={() => this.setState({counter : this.state.counter + 1})} >Increment</button>
      </>
    )
  }
}

export default Child;