import React from 'react';
import './App.css';
import Cell from './Cell'; 


export default class App extends React.Component {

//App is the parent component that manages the counter. There are two functions here -
//IncrementCounter manages the increment and DecrementCounter manages the decrement


    constructor(props) {
        super(props);

        this.state = {
            counter: 0, 
        }
    }

    incrementCounter() {
        let currentCount = this.state.counter +1; 

          this.setState({
             counter: currentCount
          })
  }

    decrementCounter(){
      let currentCount = this.state.counter -1; 

      this.setState({
        counter: currentCount
      })
      
    }

    render() {

        return (
            <div>
              {/* The increment and decrement functions are passed to the child components individually and the 
              count value is updated via the state. */}
                <h1>MA5 - Disha Saraiya </h1> 
                <h2> Count : {this.state.counter} </h2>
                <div class = "container">
                <Cell incrementCounter = {() => this.incrementCounter()} decrementCounter = {() => this.decrementCounter()}  class = "cell" />
                <Cell  incrementCounter = {() => this.incrementCounter() } decrementCounter = {() => this.decrementCounter()} class = "cell" />
                <Cell  incrementCounter = {() => this.incrementCounter()}  decrementCounter = {() => this.decrementCounter()} class = "cell" />
                <Cell  incrementCounter = {() => this.incrementCounter()} decrementCounter = {() => this.decrementCounter()} class = "cell" />
                </div>
            </div>
        )

    }


}