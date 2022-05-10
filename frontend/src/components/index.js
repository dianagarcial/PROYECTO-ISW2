import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

//import Spinner from '../spinner.svg';
import '../Styles/login.css'
import '../Styles/index.css'
import Nav from '../components/nav';
import Axios  from 'axios';
import Swal from 'sweetalert2';


export const Index = () => {

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
      <Nav></Nav>
    <div class="fondoLog">
    <div class="combologi">
    <div class='plan'>
    <a href='/administrador' className='reIndex'>
      <div class="cajonIndex">
      <div class="tit">
     
      </div>
      
      <img class="imgaseg" src="https://i.ibb.co/8xcNfmv/ajustes.png"/>
      <h2>Administrador</h2>
      </div>
      </a>




      <a href='/operario' className='reIndex'>
      <div class="cajonIndex">
      <div class="tit">
     
      </div>
      
      <img class="imgaseg" src="https://i.ibb.co/gRvd1h5/conductor.png"/>
      <h2>Operario</h2>
      </div>
      </a>

      </div>
        </div>
        </div>
        </div>
 
      

        
  
  )
}