import React, { Component } from 'react'

class Child extends Component {
    // Updating phase
    componentDidUpdate (prevProps, prevState){
        // console.log(prevProps.data);
        // console.log(this.props.data);
        if(prevProps.data !== this.props.data){
            // 0 !== 1
            console.log('State is Updated in Parent...');
        }
    }
  render() {
    return (
      <>
        <h1>Child Compo</h1>
      </>
    )
  }
}
export default Child;