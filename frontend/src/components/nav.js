import react from "react";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import '../Styles/nav.css'

function Nav (){

    const { logout, currentUser } = useAuth();
  const history = useHistory();

  const [error, setError] = useState('');


  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      setError('Server Error')
    }
  }

    
    return(
        <header>
            <nav>
            <div class="nav-bar">
            <div class="imgr">
              
            <img class="bar" src="https://i.ibb.co/J3W18z2/Vector.png" alt="Vector" border="0"></img>
            <img class="logos" src='https://i.ibb.co/J3D3BM9/logo.png'/>
            </div>
                <div class="nav-nom">
                    
                    <button className='logout-button' onClick={handleLogout} >Salir</button>
                    
                    
                </div>
            </div>
        </nav>
    </header> 
    );
}
export default Nav;