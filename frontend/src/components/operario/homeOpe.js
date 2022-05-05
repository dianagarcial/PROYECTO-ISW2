import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

//import { useAuth } from '../../context/AuthContext';
import Nav from '../nav';
import '../../Styles/conServ.css'

import '../../Styles/cajon.css'
import '../../Styles/cajondatos.css'
import '../../Styles/btn.css'


export const HomeOperario = () => {
  //const { logout, currentUser } = useAuth();
  const history = useHistory();

  const [error, setError] = useState('');


  // const handleLogout = async () => {
  //   try {
  //     await logout();
  //     history.push('/login');
  //   } catch (error) {
  //     setError('Server Error')
  //   }
  // }

  const conServicio = async (e) => {
    e.preventDefault();
    
      history.push('/reporteOperario');
    
  }

  const generaRep=async (e) => {
    e.preventDefault();
    //BUSCAR EN LA BD
      history.push('/verServicio');
    
  }
  return (
    
    <div>
      <Nav></Nav>
    
      <div class="contenedor">
        <div class="Cajon">
            <h1>Sistema de gestion integral de servicios</h1>
            <p class='caj'>Revisa tus servicios y tus pagos</p>
            
        </div>
        <div class="cajCabTot1">
  <h1 class="h1bot">Estado</h1>
  <div class='ver'>
  <div class="switch-button">
 
    <input type="checkbox" name="switch-button" id="switch-label" class="switch-button__checkbox"/>

    <label for="switch-label" class="switch-button__label"></label>
</div>
  </div>
    
    </div>
       
      <div class='planIni'>
           
    
      
      <button className='registro' onClick={conServicio} >
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">Consultar los servicios</h1>
      </div>
      <img class="imgreg" src="https://i.ibb.co/1Xxm3c5/Audit-1.png" alt="Writer-male" border="0"/>
      <h2 class="h2bot">Consulta los servicios realizados, asignados  <br/>y pasados </h2>
      </div>
      </button>

      <button className='registro' onClick={generaRep} >
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">Generar reportes</h1>
      </div>
      
      <img class="imgreg" src="https://i.ibb.co/RcGRy2g/Statistic-Document-1.png" alt="Writer-male" border="0"/>
      <h2 class="h2bot">Genera los reportes y las cuentas de cobro a presentar</h2>
      </div>
      </button>

      
      
      </div>  
      
    </div>
    </div>
        
  )
}

