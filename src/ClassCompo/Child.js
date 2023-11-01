import react, { Component } from 'react'

class Child extends Component{
    constructor(props){
        super(props)
        this.state = {
            counter : this.props.value
        }
    }
    render(){
        return(
            <>
                <h1>Class Component</h1>
                <h2>Counter value : {this.state.counter}</h2>
                <button onClick={()=> this.setState({counter: this.state.counter+1})}>increase</button>
            </>
        )
    }
}
export default Child