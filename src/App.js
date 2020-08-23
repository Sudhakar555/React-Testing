import React,{Component} from 'react';
import './App.css';

 class App extends Component{

  state = {
    count:0
  }

  

  handleClick = () => {
    this.setState({count:this.state.count + 1})
  }
  render(){
    return (
      <div data-test='component-app'>
        <h1 data-test='count-display' >No of Times Button Clicked:{this.state.count}</h1>
        <button data-test='increment-button' onClick={this.handleClick}>Increment Value</button>
      </div>
    );
  }
  
}

export default App;
