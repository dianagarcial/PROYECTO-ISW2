import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


import Nav from '../nav';
import '../../Styles/conServ.css'
import '../../Styles/tablas.css'
import '../../Styles/cajon.css'
import '../../Styles/cajondatos.css'
import Axios from 'axios';
import Swal from 'sweetalert2';


export const ConServicio = () => {
  // const { logout, currentUser } = useAuth();
  const history = useHistory();

  //const [servicios, setServicios] = useState();
  const [serviciosDia, setServiciosDia] = useState();
  const [aseguradoraB, setAseguradoraB] = useState();
  const [nomOpe, setNomOpe]=useState([]);
  const [idOpe, setIdOpe]=useState([]);


  //const [todo, setTodo] = useState('desaparece');
  //const [hoy, sethoy]= useState('tcentrar')


  

  const aseguradora = async (e) => {
    e.preventDefault();
    
      history.push('/aseguradora');
    
  }

  const buscaOp=async (e) => {
    e.preventDefault();
    //BUSCAR EN LA BD
      history.push('/detOPerario');
    
  }

  const mostrarOperario =async () => {
    const token=sessionStorage.getItem('token')
    const res= await Axios.get('/api/operario/cedulaOpe',idOpe,{
      headers: {'x-token':token}
    })
    setNomOpe(res.data.nombre)
    console.log(res.data)}




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
// const verTodoServ = async () => {

  
//     setTodo('tcentrar')
//     sethoy('desaparece')
//     document.getElementById('verdia').innerHTML='Ver menos'


  
// }

  useEffect(() => {
  
    //mostrarserv();
    mostrarOperario();
    mostrarservDiario();
    

  }, [])


  return (
    
    <div>
      <Nav></Nav>
    <div class="contServ">
    <h1>Reporte diario</h1>
    <h2>Los servicios realizados en las ultimas 24 horas estan aqui</h2>
  

  <div class="cajCab1">
  <h1>Datos aseguradora</h1>
  <div class='ver'>
    <a id="verdia" class="verm"  >Ver mas</a>
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
                     <td class='tcentrar'>  {item.estadoServicio}  </td>
                     <td class='tcentrar'>  {item.operario.nombre_completo}  </td>
                     <td class='tcentrar'>  {item.valor}  </td>
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
      
      <img class="imgaseg" src="https://i.ibb.co/ZNsZF7M/image-3.pnghttps://i.ibb.co/ZNsZF7M/image-3.png"/>
      
      </div>
      </a>
      
      
      <a href='aseguradora/?nombreAseguradora=Bolivar' className='registro'>
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">BOLÍVAR</h1>
      </div>
      
      <img class="imgaseg" src="https://i.ibb.co/S08tPF8/image-3-1.png"/>
      
      </div>
      </a>
      
      
      
      <a href='aseguradora/?nombreAseguradora=A365' className='registro'>
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">A365</h1>
      </div>
      
      <img class="imgaseg" src="https://i.ibb.co/7n22t9r/image-3-2.png"/>
      
      </div>
      </a>
      </div>

      <div class='plan'>
      <a href='aseguradora/?nombreAseguradora=iKEA' className='registro'>
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">iKEA</h1>
      </div>
      
      <img class="imgaseg" src="https://i.ibb.co/TbkH4R6/Recurso-1.png"/>
      
      </div>
      </a>
      
      
      <a href='aseguradora/?nombreAseguradora=GEA Colombia' className='registro'>
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">GEA COLOMBIA</h1>
      </div>
      
      <img class="imgaseg" src="https://i.ibb.co/TbkH4R6/Recurso-1.png"/>
      
      </div>
      </a>
      
      
      
      <a href='aseguradora/?nombreAseguradora=Assiprex' className='registro'>
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">ASSIPREX</h1>
      </div>
      
      <img class="imgaseg" src="https://i.ibb.co/TbkH4R6/Recurso-1.png"/>
      
      </div>
      </a>
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

