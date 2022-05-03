import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import Nav from '../nav';
import '../../Styles/conServ.css'
import '../../Styles/tablas.css'
import '../../Styles/cajon.css'
import '../../Styles/cajondatos.css'


export const Aseguradora = () => {
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
    <h1>Aseguradora: BOLIVAR</h1>
    <h2>Aqui se encuentran todos los servicios realizados para esta aseguradora</h2>
  
    <div class="cajCabTot">
  <h4>Total a cobrar: $XXX.XXX</h4>
  <div class='ver'>
    <a href='#' class="verm" >Descargar cuenta</a>
  </div>
  
  </div>
  <h1>Despliegue y detalle</h1>
  <div class="cajCab1">
  <h1>BOLIVAR</h1>
  </div>

    <div class="container-table100" id="tablaboton">
                
                    <div class="table100 ver1">


                        
                            <div class="table100-nextcols">
                                <table id="tablaini">
                                   
                                    
                                
    
                 <tbody id="cuerpoTabla">
                    <tr class='consulope'>
                                      
                                      
                        <th>Expediente</th>
                        <th>Servicio</th>
                        <th>Fecha</th>
                        <th>Placa</th>
                        <th>Valor</th>
                        
                        

                    </tr>
                 <tr>
                     <td class="tcentrar">4556699</td>
                     <td class="tcentrar">Elegido</td>
                     <td class="tcentrar">19-03-2022 </td>
                     <td class="tcentrar">ABC123 </td>
                     <td class="tcentrar">$14.000 </td>
                     
                 </tr>

                 <tr>
                     <td class="tcentrar">4556699</td>
                     <td class="tcentrar">Elegido</td>
                     <td class="tcentrar">19-03-2022 </td>
                     <td class="tcentrar">ABC123 </td>
                     <td class="tcentrar">$14.000 </td>
                     
                 </tr>
                 </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            
            
         </div>

         
       
    
    </div>
    
    
    
  )
}
