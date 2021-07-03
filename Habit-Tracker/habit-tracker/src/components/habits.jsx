import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {

    handleIncrement = habit => {
        this.props.onIncrement(habit);
    }
    handleDecrement = habit =>{
        this.props.onDecrement(habit);
    };
    handleDelete = habit =>{
        this.props.onDelete(habit);
    };
    handleAdd = name => {
        this.props.onAdd(name);
    }
    handleReset=habit => {
        this.props.onReset(habit);
    }
    render() {
        return (
        <>
            <HabitAddForm onAdd={this.handleAdd}/>
            <ul>
               {
                   this.props.habits.map(habit => 
                       <Habit 
                       key={habit.id} 
                       habit={habit} 
                       onIncrement={this.handleIncrement}
                       onDecrement={this.handleDecrement}
                       onDelete={this.handleDelete}
                       onReset={this.handleReset}/>
                   )
               }
           </ul>
           <button className="reset" onClick={this.props.onReset}><i className="fas fa-power-off"></i>
           </button>
        </>
           
        );
    }
}

export default Habits;