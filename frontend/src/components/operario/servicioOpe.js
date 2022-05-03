import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import Nav from '../nav';
import '../../Styles/conServ.css'

import '../../Styles/cajon.css'
import '../../Styles/cajondatos.css'


export const VerServicio = () => {
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

  const aseguradora = async (e) => {
    e.preventDefault();
    
      history.push('/aseguradora');
    
  }

  const buscaOp=async (e) => {
    e.preventDefault();
    //BUSCAR EN LA BD
      history.push('/busca');
    
  }
  return (
    
    <div>
      <Nav></Nav>
    <div class="contServ">
    <h1>Revision de un servicio</h1>
    <h2>Revisa la informacion del servicio </h2>
   
    <div class="cajCab1">
          <div class="cabeBusq">
           <h1>Detalles aseguradora</h1>
           
           </div>
           </div>
  </div>
  <div class="cuadro4">
  <div class="division">
  <div class="vertical">
  

  <table >
    <tr >
    <td class="enu"> <label>Aseguradora</label></td>
    <td><select class="cajonform" type="text" name="tservicio"></select></td>
    </tr>
    <tr >
    <td class="enu"> <label>Expediente</label></td>
    <td><input class="cajonform" type="text" name="tservicio"></input></td>
    </tr>
       
  </table>
  </div>
    
  <div class="vertical">
  

  <table >
    <tr>
    <td class="enu"> <label>Licencia Click</label></td>
    <td><input class="cajonform" type="text" name="tservicio"></input></td>
    </tr>
    <tr>
    <td class="enu"> <label>Contraseña</label></td>
    <td><input class="cajonform" type="text" name="tservicio"></input></td>
    </tr>
    
    
  </table>
  </div>
  
  </div>
    
</div>
<div class="cajCab1">
          <div class="cabeBusq">
           <h1>Detalles servicio</h1>
           
           </div>
           </div>
           <div class="cuadro4">
  <div class="division">
  <div class="vertical">
  

  <table >
    <tr >
    <td class="enu"> <label>Tipo</label></td>
    <td><select class="cajonform" type="text" name="tservicio"></select></td>
    </tr>
    <tr >
    <td class="enu"> <label>Hora</label></td>
    <td><input class="cajonform" type="text" name="tservicio"></input></td>
    </tr>
       
  </table>
  </div>

  <div class="vertical">
  

  <table >
    <tr >
    <td class="enu"> <label>Origen</label></td>
    <td><input class="cajonform" type="text" name="tservicio"></input></td>
    </tr>
    <tr >
    <td class="enu"> <label>Destino</label></td>
    <td><input class="cajonform" type="text" name="tservicio"></input></td>
    </tr>
       
  </table>
  </div>

  </div>
  </div>
 
  <div class="cajCab1">
          <div class="cabeBusq">
           <h1>Detalles asegurado</h1>
           
           </div>
           </div>
           <div class="cuadro4">
  <div class="division">
  <div class="vertical">
  

  <table >
    <tr >
    <td class="enu"> <label>Nombre</label></td>
    <td><input class="cajonform" type="text" name="tservicio"></input></td>
    </tr>
    <tr >
    <td class="enu"> <label>Apellido</label></td>
    <td><input class="cajonform" type="text" name="tservicio"></input></td>
    </tr>
       
  </table>
  </div>

  <div class="vertical">
  

  <table >
    <tr >
    <td class="enu"> <label>Telefono</label></td>
    <td><input class="cajonform" type="text" name="tservicio"></input></td>
    </tr>
    <tr >
    <td class="enu"> <label>Placa</label></td>
    <td><input class="cajonform" type="text" name="tservicio"></input></td>
    </tr>
       
  </table>
  </div>

  </div>
  </div>
  

</div>









    
    
    
  )
}

