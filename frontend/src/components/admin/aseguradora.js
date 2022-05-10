import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';


import Nav from '../nav';
import '../../Styles/conServ.css'
import '../../Styles/tablas.css'
import '../../Styles/cajon.css'
import '../../Styles/cajondatos.css'
import Axios from 'axios';
import {convertToCurrency} from '../../funciones/convertir'


export const Aseguradora = () => {
 
  const history = useHistory();

  const [nombreAseguradora, setNombreAseguradora] = useState();
  const [servicio, setServicio] = useState();



  // const handleLogout = async () => {
  //   try {
  //     await logout();
  //     history.push('/login');
  //   } catch (error) {
  //     setError('Server Error')
  //   }
  // }
  useEffect(() => {
    buscarAseguradora();

  }, [])

  const buscarAseguradora = async()=>{
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores)
    const values = urlParams.values()


    for (const value of values) {

      console.log(value)
      const token = sessionStorage.getItem('token')

      const respuesta = await Axios.get('/api/servicio/serAsegura/' + value ,{
        headers : {'x-token': token}
    })
      console.log(respuesta.data)
      setNombreAseguradora(value)
      console.log(respuesta.data.serviciosAseguradora)
      setServicio(respuesta.data.serviciosAseguradora)
     
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
    <h1>Aseguradora: {nombreAseguradora}</h1>
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
                    {servicio && servicio.length>0 && servicio.map((item)=>{
                     return  <tr class="tcentrar">
                     <td class='tcentrar'>  {item.expediente}  </td>
                     <td class='tcentrar'>  {item.tipoServicio}  </td>
                     <td class='tcentrar'>  {(item.fecha).substring(0,10)}  </td>
                     <td class='tcentrar'>  {item.placaAsegurado}  </td>
                     <td class='tcentrar'>  {convertToCurrency(item.valor)}  </td>
                     </tr>
                 
                   
                  })}
                 </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            
            
         </div>

         
       
    
    </div>
    
    
    
  )
}
