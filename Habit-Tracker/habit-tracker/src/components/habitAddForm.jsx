import React, {memo} from 'react';

const habitAddForm = memo(
    props => {
        const inputRef=React.createRef();
        const onSubmit = event =>{
            event.preventDefault();
            const name = inputRef.current.value;
            name && props.onAdd(name);
            inputRef.current.value='';
        };
        return (
            <form className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className="add-input" 
            placeholder="Habit" />
            <button className="add-button">Add</button>
            </form>       
        );
    }
);

export default habitAddForm;

//class 부분은 주석 처리 
//class HabitAddForm extends PureComponent {
//inputRef=React.createRef();
//    onSubmit= event =>{
//        event.preventDefault();
//        const name = this.inputRef.current.value;
//        name && this.props.onAdd(name);
//        this.inputRef.current.value='';
//    }
//    render() {
//        console.log('habitAddForm');
//        return (
//            <form className="add-form" onSubmit={this.onSubmit}>
//                <input ref={this.inputRef} type="text" className="add-input" 
//                placeholder="Habit" />
//                <button className="add-button">Add</button>
//           </form>
//       );
//        }
//}

//export default HabitAddForm;