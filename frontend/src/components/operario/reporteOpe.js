import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// import { useAuth } from '../../context/AuthContext';
import Nav from '../nav';
import '../../Styles/conServ.css'

import '../../Styles/cajon.css'
import '../../Styles/cajondatos.css'


export const ReporteServicio = () => {
  // const { logout, currentUser } = useAuth();
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
    <h1>Operario: DAVID SANCHEZ</h1>
    <h2>Aqui se encuentran todos los servicios realizados para el operario</h2>
    <div class="cajCabTot">
  <h4>Total a cobrar: $XXX.XXX</h4>
  <div class='ver'>
    <a href='#' class="verm" >Descargar cuenta</a>
  </div>
    
    </div>
  <h1>Información personal</h1>  
    <div class="cajCab1">
  <h1>David Sanchez </h1>
  <div class='ver'>
    <a href='#' class="verm" >Editar</a>
  </div>
  </div>
  <div class="cuadro4">
  <div class="division">
  <div class="vertical">
  

  <table >
    <tr >
    <td> <label>Cedula</label></td>
    <td><label>X.XXX.XXX.XXX</label></td>
    </tr>
    <tr>
    <td> <label>Nombre</label></td>
    <td> <label>XXXXX XXXXX </label></td>
    </tr>
    <tr>
    <td> <label>Celular</label></td>
    <td> <label>XXXXXXXXXX</label></td>
    </tr>
    
    
  </table>
  </div>
    
  <div class="vertical">
  

  <table >
    
    <tr>
    <td> <label>E-mail</label></td>
    <td> <label>david@gmail.com</label></td>
    </tr>
    <tr>
    <td> <label>Edad</label></td>
    <td> <label>20 años</label></td>
    </tr>
    <tr>
    <td> <label>RH</label></td>
    <td> <label>O+</label></td>
    </tr>
    
    
  </table>
  </div>
  </div>
  </div>

  <h1>Despliegue y detalle</h1>
  
  <div class="cajCab1">
  <h1>David Sanchez</h1>
  </div>
  

    <div class="container-table100" id="tablaboton">
                
                    <div class="table100 ver1">


                        
                            <div class="table100-nextcols">
                                <table id="tablaini">
                                   
                                    
                                
    
                 <tbody id="cuerpoTabla">
                    <tr class='consulope'>
                                      
                                      
                        <th>Aseguradora</th>
                        <th>Expediente</th>
                        <th>Estado</th>
                        <th>Servicio</th>
                        <th>Valor</th>
                       
                        

                    </tr>
                 <tr>
                     <td class="tcentrar">Bolivar</td>
                     <td class="tcentrar">4559632</td>
                     <td class="tcentrar">Aceptado</td>
                     <td class="tcentrar">Elegido</td>
                     <td class="tcentrar">$14.000</td>
                     
             
                   
                 </tr>
                 <tr>
                     <td class="tcentrar">Bolivar</td>
                     <td class="tcentrar">4559632</td>
                     <td class="tcentrar">Aceptado</td>
                     <td class="tcentrar">Elegido</td>
                     <td class="tcentrar">$14.000</td>
                     
             
                   
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
