import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count:0,
    };
    handleIncrement = () =>{
        //state object 안에 있는 count를 증가한 뒤 state update
        this.setState({count:this.state.count+1});
    };
    handleDecrement = () =>{
        const counts = this.state.count-1
        this.setState({count : counts <0 ? 0 : counts});
    };
    render() {
        const {name,count} = this.props.habit;
        return (
            <li className="habit"> 
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;