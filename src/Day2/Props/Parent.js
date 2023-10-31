import React, { Component } from 'react'
import Child from './Child';

class Parent extends Component {
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
  render() {
    return (
      <>
        <Child value={this.state.count}  />
      </>
    )
  }
}

export default Parent;