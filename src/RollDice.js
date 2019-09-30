import React, {Component} from 'react';
import './RollDice.css';

class RollDice extends Component{
    constructor(props){
        super(props);
        this.state = {
            die1: "two",
            die2: "five"
        }
        this.Roll = this.Roll().bind(this);
    }
    function Roll = {
        console.log("lets roll!");
    }

    render(){
        return(
                <button className="rollDice" onClick={this.Roll()}>Let's roll the dice!</button>
        );
    }
}

export default RollDice;