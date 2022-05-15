import React, { useState, useEffect } from 'react';
// import { useAuth } from '../../context/AuthContext';
import Nav from '../operario/nav';
import '../../Styles/conServ.css'

import '../../Styles/cajon.css'
import '../../Styles/cajondatos.css'
import Axios from 'axios';
import {convertToCurrency} from '../../funciones/convertir'


export const ReportePendiente = () => {

  const [operario, setOperario] = useState('');
  const [servicio, setServicio] = useState('');

  const mostrarDPersonal = async()=>{
    const value= sessionStorage.getItem('uid');
    
    console.log(value)

   
      const token = sessionStorage.getItem('token')

      const respuesta = await Axios.get('/api/operario/idOperario/'+value,{
        headers : {'x-token': token}
    })
    
       console.log(respuesta.data.opeId)
      setOperario(respuesta.data.opeId)
      
     
     
    
  
  }
  //BUSCAR LOS OPERARIOS
  const mostarServicoOpe= async()=>{
    const value= sessionStorage.getItem('uid');
    
    
    const token = sessionStorage.getItem('token')
    // const valor= 'ObjectId('+values+')'
    
    const respuesta = await Axios.get('/api/servicio/detOpe/' + value ,{
      headers : {'x-token': token}
  })
  //console.log(respuesta.data.serOpe);
  setServicio(respuesta.data.serOpe);

    
  }
  function busEstados(estado) {
    if (estado==='N'){
      return 'Pendiente'
    }else if (estado ==='F'){
      return 'Fallido'
    }else if (estado == 'C'){
      return 'Completado'
    }
    
  }

  useEffect(() => {
    mostrarDPersonal()
    mostarServicoOpe()
  }, [])
 


  
  return (
    
    <div>
      <Nav></Nav>
    <div class="contServ">
    <h1>Operario: {operario.nombre_completo}</h1>
    <h2>Aqui se encuentran los servicios que se le han asignado y se encuentran por realizar</h2>
 
  <div class="cajCab1">
  <h1>{operario.nombre_completo}</h1>
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
                    {servicio && servicio.length>0 && servicio.map((item)=>{
                      
                        if(item.estadoServicio==='N'){
                     
                     return  <tr class="tcentrar">
                     <td class='tcentrar'>  {item.aseguradoraNombre}  </td>
                     <td class='tcentrar'>  {item.expediente}  </td>
                     <td class='tcentrar'>  {busEstados(item.estadoServicio)}  </td>
                     <td class='tcentrar'>  {item.tipoServicio}  </td>
                     <td class='tcentrar'>  {convertToCurrency(item.valor)}  </td>
                     <td class='tcentrar'><a className='logout-button' href={item._id ? "/verServicio/?_id=" + item._id : ""}>Detalles</a>  </td>
                     </tr>
                 }
                
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
