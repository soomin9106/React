import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        console.log('Navbar');
        return (
            <nav className="navbar">
                <i className="navbar-logo fas fa-user-friends"></i>
                <span className="navbar-name">Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;