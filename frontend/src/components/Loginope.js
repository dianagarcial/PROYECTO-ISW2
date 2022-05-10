import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


//import Spinner from '../spinner.svg';
import '../Styles/login.css'
import Nav from '../components/nav';
import Axios  from 'axios';
import Swal from 'sweetalert2';


export const LoginOpe = () => {

  // const { login } = useAuth();
  // const [error, setError] = useState(null);
  
  const [nombre_usuario, setNombre_usuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  // const history = useHistory();
  const handleEmail = e => setNombre_usuario(e.target.value);
  const handlePassword = e => setContraseña(e.target.value);

  
  const iniciarSesion = async (e) => {

    e.preventDefault();
    
    const operario = {nombre_usuario,contraseña};
    const response = await Axios.post('/api/operario/', operario);
    const ok = response.data.ok;
    const msg = response.data.msg;

    console.log(response);

    if(!ok){

      Swal.fire({
        icon: 'error',
        title: msg,
        showConfirmButton: false,
        timer: 1500
      });

    } else {

      const token = response.data.token;
      const uid = response.data.uid;

      sessionStorage.setItem('token',token);
      sessionStorage.setItem('uid',uid);

      Swal.fire({
        icon: 'success',
        title: 'Benvigut',
        showConfirmButton: false,
        timer:1500
      });

      window.location.href='/homeOperario';

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