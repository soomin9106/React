import React from 'react';
import { useHistory } from 'react-router-dom';

const Profile = () => {
   const history = useHistory();
   return (
    <>
       <h1>This is profile page. Come to see this page 🤭</h1>
       <button onClick={() => {
        history.push('/')}}>Go To Home</button>
    </>
   );
}

export default Profile;