import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import Nav from '../nav';
import '../../Styles/conServ.css'
import '../../Styles/tablas.css'
import '../../Styles/cajon.css'
import '../../Styles/cajondatos.css'


export const ConServicio = () => {
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
      history.push('/detOPerario');
    
  }
  return (
    
    <div>
      <Nav></Nav>
    <div class="contServ">
    <h1>Reporte diario</h1>
    <h2>Los servicios realizados en las ultimas 24 horas estan aqui</h2>
  

  <div class="cajCab1">
  <h1>Datos aseguradora</h1>
  <div class='ver'>
    <a href='#' class="verm" >Ver mas</a>
  </div>
  </div>

    <div class="container-table100" id="tablaboton">
                
                    <div class="table100 ver1">


                       
                            <div class="table100-nextcols">
                                <table id="tablaini">
                                   
                                    
                                
    
                 <tbody id="cuerpoTabla">
                    <tr class='consulope'>
                                      
                                      
                        <th>Aseguradora</th>
                        <th>Tipo de servicio</th>
                        <th>Estado</th>
                        <th>Operario</th>
                        <th>Valor</th>
                        

                    </tr>
                   
                 <tr>
                     <td class="tcentrar">Bolivar</td>
                     <td class="tcentrar">Elegido</td>
                     <td class="tcentrar">Aceptado </td>
                     <td class="tcentrar">4556699 </td>
             
                     <td class="tcentrar">$14.000</td>
                 </tr>
                 </tbody>
                                </table>
                            </div>
                       
                </div>
            </div>
          <h1>Reporte por aseguradora</h1> 
          <h2>Los servicios realizados desplegados por aseguradora</h2>
     
    </div>
    <div class='plan'>
    <button className='registro'  onClick={aseguradora} >
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">SURAMERICANA</h1>
      </div>
      
      <img class="imgaseg" src="https://i.ibb.co/ZNsZF7M/image-3.pnghttps://i.ibb.co/ZNsZF7M/image-3.png"/>
      
      </div>
      </button>
      
      
      <button className='registro'  onClick={aseguradora} >
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">BOLÍVAR</h1>
      </div>
      
      <img class="imgaseg" src="https://i.ibb.co/S08tPF8/image-3-1.png"/>
      
      </div>
      </button>
      
      
      
      <button className='registro'  onClick={aseguradora} >
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">A365</h1>
      </div>
      
      <img class="imgaseg" src="https://i.ibb.co/7n22t9r/image-3-2.png"/>
      
      </div>
      </button>
      </div>

      <div class='plan'>
    <button className='registro'  onClick={aseguradora} >
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">iKEA</h1>
      </div>
      
      <img class="imgaseg" src="https://i.ibb.co/TbkH4R6/Recurso-1.png"/>
      
      </div>
      </button>
      
      
      <button className='registro'  onClick={aseguradora} >
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">GEA COLOMBIA</h1>
      </div>
      
      <img class="imgaseg" src="https://i.ibb.co/TbkH4R6/Recurso-1.png"/>
      
      </div>
      </button>
      
      
      
      <button className='registro'  onClick={aseguradora} >
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">ASSIPREX</h1>
      </div>
      
      <img class="imgaseg" src="https://i.ibb.co/TbkH4R6/Recurso-1.png"/>
      
      </div>
      </button>
      </div>     
      <div class="contSer">
      <h1>Reporte por operario</h1> 
      <h2>Los servicios realizados desplegados por operario</h2>
          </div>
      <div class="cajCab1">
      <h1>Operario</h1>
      <div class='ver'>
    <a href='#' class="verm" >Ver mas</a>
  </div>
 
  </div>


    <div class="container-table100" id="tablaboton">
                
                    <div class="table100 ver1">


                       
                            <div class="table100-nextcols">
                                <table id="tablaini">
                                                               
    
                 <tbody class="cuerpoTabla">
                    <tr class="consulope">
                                      
                                      
                        <th>Nombre</th>
                        <th>Cedula</th>
                        <th>Telefono</th>
                        <th>Saldo</th>
                        <th >Detalles                   </th>
                        
                        

                    </tr>
                 <tr>
                     <td class="tcentrar">David Sanchez</td>
                     <td class="tcentrar">1005456689</td>
                     <td class="tcentrar">3004562891 </td>
                     <td class="tcentrar">$301.000</td>
                     <td class="tcentrar"><button onClick={buscaOp} className='logout-button'>Detalles</button></td>
             
                     
                 </tr>
                 </tbody>
                                </table>
                            </div>
                       
                  
                </div>
            </div>

        

        
       
    
    </div>
    
    
  )
}

