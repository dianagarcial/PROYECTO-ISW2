import Nav from '../nav';
import '../../Styles/conServ.css'
import React, { useState, useEffect } from 'react';
import '../../Styles/cajon.css'
import '../../Styles/cajondatos.css'
import Axios from 'axios';
import {convertToCurrency} from '../../funciones/convertir'


export const ReporteServicio = () => {

  
  const cont=0;
  const [operario, setOperario] = useState('');
  const [servicio, setServicio] = useState('');
  const [valorCobrar, setValorCobrar] = useState('');
  const [susServicios, setSusservicios] = useState('');
  const [serviPagado, setServipagado] = useState('');
  

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

  const mostrardatosid= async()=>{
    let valores;
    let valor;
      const token = sessionStorage.getItem('token')

      const respuesta = await Axios.get('/api/servicio/saldoOperario/',{
        headers : {'x-token': token}
    })
    
       console.log(respuesta.data.serOpe)
      setValorCobrar(respuesta.data.serOpe)

      valorCobrar && valorCobrar.length>0 && valorCobrar.map((item)=>{
        const valueid= sessionStorage.getItem('uid');
              
        if(item._id===valueid){

          setSusservicios(item.servicios)
          console.log(item.servicios)
     
        }
    })
  
    susServicios && susServicios.length>0 && susServicios.map((item)=>{
      
      if(item.estadoServicio==true){
     
        console.log(item.valor)
      
      }
      
      console.log(item.valor)
      
      
    }
   

  )
  
  console.log(valores)
  
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
    mostrardatosid()
  }, [])
  return (
    
    <div>
      <Nav></Nav>
    <div class="contServ">
    <h1>Operario: {operario.nombre_completo}</h1>
    <h2>Aqui se encuentran todos los servicios realizados para el operario</h2>
    <div class="cajCabTot">
    {
      
    }
  
  <div class='ver'>
    <a href='/#' class="verm" >Descargar cuenta</a>
  </div>
    
    </div>
  <h1>Información personal</h1>  
    <div class="cajCab1">
  <h1>{operario.nombre_completo} </h1>
  <div class='ver'>
    <a href='/#' class="verm" >Editar</a>
  </div>
  </div>
  <div class="cuadro4">
  <div class="division">
  <div class="vertical">
  

  <table >
    <tr >
    <td> <label>Cedula</label></td>
    <td><label>{operario.cedula}</label></td>
    </tr>
    <tr>
    <td> <label>Nombre</label></td>
    <td> <label>{operario.nombre_completo}</label></td>
    </tr>
    <tr>
    <td> <label>Celular</label></td>
    <td> <label>{operario.telefono}</label></td>
    </tr>
    
    
  </table>
  </div>
    
  <div class="vertical">
  

  <table >
    
    <tr>
    <td> <label>E-mail</label></td>
    <td> <label>{operario.nombre_usuario}</label></td>
    </tr>
    <tr>
    <td> <label>Edad</label></td>
    <td> <label>{operario.edad} años</label></td>
    </tr>
    <tr>
    <td> <label>RH</label></td>
    <td> <label>{operario.rh}</label></td>
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
                    {servicio && servicio.length>0 && servicio.map((item)=>{
                     
                     if(item.estadoServicio !='N'){
                     return  <tr class="tcentrar">
                     <td class='tcentrar'>  {item.aseguradoraNombre}  </td>
                     <td class='tcentrar'>  {item.expediente}  </td>
                     <td class='tcentrar'>  {busEstados(item.estadoServicio)}  </td>
                     <td class='tcentrar'>  {item.tipoServicio}  </td>
                     <td class='tcentrar'>  {convertToCurrency(item.valor)}  </td>
                   
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
