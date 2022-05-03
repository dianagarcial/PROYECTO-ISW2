import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
//import Spinner from '../spinner.svg';
import '../Styles/login.css'
import Nav from '../components/nav';

export const Login = () => {

  const { login } = useAuth();
  const [error, setError] = useState(null);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setLoading(true);
    try {
      await login(email, password);
      //setLoading(false);

      if(email=='admin@gmail.com'){
        history.push('/')
      }else{
        history.push('/homeOperario');
      }
      
      
    } catch (error) {
      //setLoading(false);
      setError('Credenciales incorrectas');
      setTimeout(() => setError(''), 1500);
    }
  }


  return (
    <div>
      <Nav></Nav>
    <div class="fondoLog">
    <div class="combologi">
    <div class="tilogin">
        <h1>Ingresa al sistema de <br/>CEOCOL</h1>
        </div>                                                                                        
        <div class="conte-login">
        <form onSubmit={handleSubmit} className='card-logi'>
        
        
        {error && <p className='error' >{error}</p>}
          <label class="lalogin">Usuario</label>
          <input type='email' placeholder='Correo electronico' onChange={handleEmail} />
          <label class="lalogin">Contraseña</label>
          <input type='password' placeholder='Contraseña' onChange={handlePassword} />
          <div class="btn-log">
          <input class="desRep" type='submit' value='Log In' />
       
      </div>
        </form>
        </div> 
        </div>
        </div>
        </div>
      

        
  
  )
}