import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import Nav from '../nav';

import '../../Styles/cajon.css'

export const Home = () => {
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

  const consulServicio = async (e) => {
    e.preventDefault();
    
      history.push('/conServi');
    
  }

  const registraServicio = async (e) => {
    e.preventDefault();
    
      history.push('/registraServicio');
    
  }

  const generaReporte = async (e) => {
    e.preventDefault();
    
      history.push('/generaReporte');
    
  }

  return (
    
    
    <div>
    <Nav></Nav>
   
    <div class="contenedor">
        <div class="Cajon">
            <h1>Sistema de gestion integral de servicios</h1>
            <p class='caj'>Controla los servicios y los detalles del pago de los operarios</p>
            
        </div>
       
      <div class='planIni'>
           
      
      
      <button className='registro' onClick={registraServicio} >
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">Registrar un servicio</h1>
      </div>
      <img class="imgreg" src="https://i.ibb.co/hyFGFwr/Writer-male.png" alt="Writer-male" border="0"/>
      <h2 class="h2bot">Ingrese para asignarle un servicio a los <br/>operarios disponibles </h2>
      </div>
      </button>

      <button className='registro' onClick={consulServicio} >
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">Consultar los servicios</h1>
      </div>
      
      <img class="imgreg" src="https://i.ibb.co/tKTTtG4/Audit.png" alt="Writer-male" border="0"/>
      <h2 class="h2bot">Consulta los servicios realizados,<br/>asignados y pasados</h2>
      </div>
      </button>

      <button className='registro' onClick={generaReporte} >
     
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">Generar reportes</h1>
      </div>

      <img class="imgreg" src="https://i.ibb.co/5MJfSy4/Statistic-Document.png" alt="Writer-male" border="0"/>
      <h2 class="h2bot">Genera los reportes y las cuentas de <br/>cobro a presentar</h2>
      
      </div>
      </button>
      
      
      </div>  
      
    </div>
    </div>
    

    
    
  )
}

