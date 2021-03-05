import React, { Component } from 'react';

class Cell extends Component {

// A cell is the child component that manages the color individually, as well as the counter that gets 
// passed down from the parent component via props. 

    constructor(props) {
        super(props);
        this.state = { 
            color : "white",
         }
    }
    
    changeCounter() {
        //If the color is white, then change the color to black as well as increment the counter. 
        if (this.state.color === "white") {
            
            this.setState({
               color: "black", 
               
            })       
            this.props.incrementCounter(); 

        } else {
        //If the color is black, then change the color to white and decrement the counter. 
            this.setState({
                color: "white", 
            })
            this.props.decrementCounter(); 
        }
    }


    render() { 
        {/* The style is set via a constant and the backgroundColor is updated via state. */}
        const mystyle = {
            backgroundColor: this.state.color, 
            width : "100px", 
            height: "100px",
            border: "1px solid gray"
          };


        return ( 
            <div style = {mystyle} onClick = {() => this.changeCounter()}> </div>
        );
    }
}
 
export default Cell;