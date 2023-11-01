import React, { Component } from 'react'
import Child from './Child';

class ClassCompo extends Component {
    // Mounting Phase
    constructor() {
        super();
        console.log('1. This is constructor... ');
        this.state = {
            count: 0,
            change: true
        }
    }

    componentDidMount() {
        console.log('3. This is componentDidMount...');
    }

    render() {
        console.log('2. This is Render....');
        return (
            <>
                <h2>Count : {this.state.count}</h2>
                <button onClick={() => this.setState({ count: this.state.count + 1 })} >increment</button> <br />
                <Child data={this.state.count} />
                <button onClick={() => this.setState({ change: !this.state.change })} >Toggle</button>
                {this.state.change ? <UnmountData /> : ""}
            </>
        )
    }
}
export default ClassCompo;

// unmounting Phase
class UnmountData extends Component {
    componentWillUnmount() {
        alert('4. Component will be Removed from DOM....')
    }
    render() {
        return (
            <>
                <h2>This is Unmounting Compo</h2>
            </>
        )
    }
}
