import React, { Component } from 'react'

//1/Mounting --> constructor --> render --> componentDidMount
//2/updating --> state/ props --> render --> 
//3/unmounting --> 


export default class LifeCycle extends Component {
    
    constructor(props) {
      super(props);
      console.log("constructor")
     
      this.state = {
         count: 0,
      }
    }

  componentDidMount(){
    console.log("componentDidMount")
  };

 
 componentDidUpdate(){
  console.log("componentDidUpdate")
};

shouldComponentUpdate(){
  console.log("shouldComponentUpdate")
  return true;
};

handleIncrement = () => {
  this.setState({
    count: this.state.count + 1 
  })
};
 
  render() {
    console.log("render");

    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick= {this.handleIncrement}>++</button>
      </div>
    )
  }
};
