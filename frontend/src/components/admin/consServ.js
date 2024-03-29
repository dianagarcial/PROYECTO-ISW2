import React, { useState, useEffect } from 'react';


import NavA from '../admin/nav';
import '../../Styles/conServ.css'
import '../../Styles/tablas.css'
import '../../Styles/cajon.css'
import '../../Styles/cajondatos.css'
import Axios from 'axios';

import {convertToCurrency} from '../../funciones/convertir'

export const ConServicio = () => {
  // const { logout, currentUser } = useAuth();

  //const [servicios, setServicios] = useState();
  const [serviciosDia, setServiciosDia] = useState();
  //const [aseguradoraB, setAseguradoraB] = useState();
  //const [nomOpe, setNomOpe]=useState([]);
  //const [idOpe, setIdOpe]=useState([]);
  const [operario, setOperario] = useState();

  //const [todo, setTodo] = useState('desaparece');
  //const [hoy, sethoy]= useState('tcentrar')


  

  

//    const mostrarserv =async () => {
//     const token=sessionStorage.getItem('token')
//     const res= await Axios.get('/api/servicio/listarServicios',{
//       headers: {'x-token':token}
//     })
//     setServicios(res.data.servicios)
//     console.log(res.data.servicios)
 
   
  
// }

const mostrarservDiario =async () => {
  const token=sessionStorage.getItem('token')
  const res= await Axios.get('/api/servicio/serDiario',{
    headers: {'x-token':token}
  })
  setServiciosDia(res.data.getServiciosDiarios)
  console.log(res.data.getServiciosDiarios)

 

}

const reporteOpe =async () => {
  const token=sessionStorage.getItem('token')
  const res= await Axios.get('/api/operario/listaOperarios',{
    headers: {'x-token':token}
  })
  setOperario(res.data.operarios)
  console.log(res.data.operarios)

 

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
// const verTodoServ = async () => {

  
//     setTodo('tcentrar')
//     sethoy('desaparece')
//     document.getElementById('verdia').innerHTML='Ver menos'


  
// }

  useEffect(() => {
  
    //mostrarserv();
    //mostrarOperario();
    mostrarservDiario();
    reporteOpe();
    

  }, [])


  return (
    
    <div>
   <NavA></NavA>
    <div class="contServ">
    <h1>Reporte diario</h1>
    <h2>Los servicios realizados en las ultimas 24 horas estan aqui</h2>
  

  <div class="cajCab1">
  <h1>Datos aseguradora</h1>
 
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
            
                   
                   {/* {servicios && servicios.length>0 && servicios.map((item)=>{
                     return  <tr class="tcentrar">
                     <td class={todo}>  {item.aseguradoraNombre}  </td>
                     <td class={todo}>  {item.tipoServicio}  </td>
                     <td class={todo}>  {item.estadoServicio}  </td>
                     <td class={todo}>  {item.operario}  </td>
                     <td class={todo}>  {item.valor}  </td>
                     </tr>
                 
                   
                  })} */}


                  {serviciosDia && serviciosDia.length>0 && serviciosDia.map((item)=>{
                     return  <tr class="tcentrar">
                     <td class='tcentrar'>  {item.aseguradoraNombre}  </td>
                     <td class='tcentrar'>  {item.tipoServicio}  </td>
                     <td class='tcentrar'>  {busEstados(item.estadoServicio)}  </td>
                     <td class='tcentrar'>  {item.operario.nombre_completo}  </td>
                     <td class='tcentrar'>  {convertToCurrency(item.valor)}  </td>
                     </tr>
                 
                   
                  })}

                    
                 </tbody>
                    </table>
                    </div>
                       
                </div>
            </div>
          <h1>Reporte por aseguradora</h1> 
          <h2>Los servicios realizados desplegados por aseguradora</h2>
     
    </div>
    <div class='plan'>
    <a href='aseguradora/?nombreAseguradora=Suramericana' className='registro'>
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">SURAMERICANA</h1>
      </div>
      
      <img class="asi" src="https://i.ibb.co/ZNsZF7M/image-3.pnghttps://i.ibb.co/ZNsZF7M/image-3.png" alt="imagen"/>
      
      </div>
      </a>
      
      
      <a href='aseguradora/?nombreAseguradora=Bolivar' className='registro'>
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">BOLÍVAR</h1>
      </div>
      
      <img class="asi" src="https://i.ibb.co/S08tPF8/image-3-1.png" alt="imagen"/>
      
      </div>
      </a>
      
      
      
      <a href='aseguradora/?nombreAseguradora=A365' className='registro'>
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">A365</h1>
      </div>
      
      <img class="asi" src="https://i.ibb.co/7n22t9r/image-3-2.png" alt="imagen"/>
      
      </div>
      </a>
      </div>

      <div class='plan'>
      <a href='aseguradora/?nombreAseguradora=iKE Asistencia' className='registro'>
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">iKE Asistencia</h1>
      </div>
      
      <img class="ikea" src="https://i.ibb.co/Y3YzNZV/favicon-194x194-1.png" alt="imagen"/>
      
      </div>
      </a>
      
      
      <a href='aseguradora/?nombreAseguradora=GEA Colombia' className='registro'>
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">GEA COLOMBIA</h1>
      </div>
      
      <img class="asi" src="https://i.ibb.co/s5RQngS/LOGO-GEA-COLOMBIA-1-300x110-1.png" alt="imagen"/>
      
      </div>
      </a>
      
      
      
      <a href='aseguradora/?nombreAseguradora=Assiprex' className='registro'>
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">ASSIPREX</h1>
      </div>
      
      <img class="asi" src="https://i.ibb.co/DY6TYbG/logo-assisprex.png" alt="imagen"/>
      
      </div>
      </a>
      </div>     
      <div class="contSer">
      <h1>Reporte por operario</h1> 
      <h2>Los servicios realizados desplegados por operario</h2>
          </div>
      <div class="cajCab1">
      <h1>Operarios</h1>
      
 
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
        
                        <th >Detalles                   </th>
                        
                        

                    </tr>
                    {operario && operario.length>0 && operario.map((item)=>{
                     
                     return  <tr class="tcentrar">
                     <td class='tcentrar'>  {item.nombre_completo}  </td>
                     <td class='tcentrar'>  {item.cedula}  </td>
                     <td class='tcentrar'>  {item.telefono}  </td>
             
                     <td class='tcentrar'><a className='logout-button' href={item._id ? "/detOPerario/?_id=" + item._id : ""}>Detalles</a>  </td>
                     </tr>
                 
                   
                  })}
                   
           
                 </tbody>
                                </table>
                            </div>
                       
                  
                </div>
            </div>

        

        
       
    
    </div>
    
    
  )
}

