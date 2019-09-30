import React, {Component} from 'react';
import RollDice from './RollDice';
import "./Die.css";

class Die extends Component {
    render(){
        return(
            <div>
                <i className='fas fa-dice-one'></i>
            </div>

        );
    }
};

export default Die;