import React, { useState } from 'react';



//import Spinner from '../spinner.svg';
import '../Styles/login.css'

import Axios  from 'axios';
import Swal from 'sweetalert2';


export const LoginAdmi = () => {

  // const { login } = useAuth();
  // const [error, setError] = useState(null);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const history = useHistory();
  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   //setLoading(true);
  //   try {
  //     await login(email, password);
  //     //setLoading(false);

  //     if(email=='admin@gmail.com'){
  //       history.push('/')
  //     }else{
  //       history.push('/homeOperario');
  //     }
      
      
  //   } catch (error) {
  //     //setLoading(false);
  //     setError('Credenciales incorrectas');
  //     setTimeout(() => setError(''), 1500);
  //   }
  // }
  const iniciarSesion = async (e) => {

    e.preventDefault();
    
    const usuario = {email,password};
    const response = await Axios.post('/api/usuario/', usuario);
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

      window.location.href='/home';

    }    

  }

  return (
    <div>
 
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