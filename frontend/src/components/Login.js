import React, { useState } from 'react';



//import Spinner from '../spinner.svg';
import '../Styles/login.css'

import Axios  from 'axios';
import Swal from 'sweetalert2';
import Nav from './nav'


export const LoginAdmi = () => {

  // const { login } = useAuth();
  // const [error, setError] = useState(null);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const history = useHistory();
  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);


  const iniciarSesion = async (e) => {

    e.preventDefault();
    
    const usuario = {email,password};
    const response = await Axios.post('/api/usuario', usuario);

    const ok = response.data.ok;
    const msg = response.data.msg;
    
    if(!ok){

      Swal.fire({
        icon: 'error',
        title: msg,
        showConfirmButton: false,
        timer: 2000
      });

    }else {

      const token = response.data.token;
      const uid = response.data.uid;

      sessionStorage.setItem('token',token);
      sessionStorage.setItem('uid',uid);

      Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        showConfirmButton: false,
        timer:2000
      });

      window.location.href='/home';

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
        <form onSubmit={iniciarSesion} className='card-logi'>
        
        
        {/* {error && <p className='error' >{error}</p>} */}
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