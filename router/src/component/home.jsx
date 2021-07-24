import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = props => {
    const history = useHistory();
    return(
        <>
            <h1>This is home page! 😊</h1>
            <button onClick={() => {
            history.push('/profile');}}>
            Go To Profile
            </button>
        </>      
    );
};

export default Home;