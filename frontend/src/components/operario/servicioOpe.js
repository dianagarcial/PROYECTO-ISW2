import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// import { useAuth } from '../../context/AuthContext';
import Nav from '../operario/nav';
import '../../Styles/conServ.css'

import '../../Styles/cajon.css'
import '../../Styles/cajondatos.css'
import Axios from 'axios';
import Swal from 'sweetalert2';

export const VerServicio = () => {
  // const { logout, currentUser } = useAuth();
  const history = useHistory();

  const [error, setError] = useState('');
  const [servicio, setServicio] = useState('');
  const [estado,setestado]=useState([])
  const [estadoSel,setaestadoSel]=useState('N')
  const [estadoServicio,setestadoServicio]=useState('')

  const mostarServicoOpe= async()=>{
    const valores = window.location.search;
   
    const values = valores.substring(5);
    console.log(values)

    
    
    const token = sessionStorage.getItem('token')
    // const valor= 'ObjectId('+values+')'
    
    const respuesta = await Axios.get('/api/servicio/servicioID/' + values ,{
      headers : {'x-token': token}
  })
  console.log(respuesta.data.serviciosId);
  setServicio(respuesta.data.serviciosId);

    
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

  const actualizarEstado=async (e) =>{
    e.preventDefault();

    
    const servicio= {
      estadoServicio:estadoSel  
      
    };   

    console.log(servicio)
   
    const valores = window.location.search;
   
    const values = valores.substring(5);
    console.log(values)
    console.log(estadoSel)
    const token = sessionStorage.getItem('token')
    const res=await Axios.put('/api/servicio/'+values+'/'+estadoSel,{
      headers: {'token':token}
    })
    const ok =res.data.ok
    console.log(ok)
    
    Swal.fire({
      icon: 'success',
      title: 'Se actualizo el exito del servicio con exito',
      showConfirmButton: false,
      timer: 2000
      
    });
    //FALTA REDIRECCION
    console.log(estadoSel)
    window.location.href = '/homeOperario'
    

   // e.target.reset();//Se limpia el formulario
    

  

}

  useEffect(() => {

    mostarServicoOpe()
    
  }, [])



    
  
  return (
    
    <div>
      <Nav></Nav>
    <div class="contServ">
    <h1>Revision de un servicio</h1>
    <h2>Revisa la informacion del servicio </h2>
    <div class='hori'>
    <h2>Cambiar el estado del servicio</h2>
    <form onSubmit={actualizarEstado} class='est' >
    
    <select class="cajonsel" type="text" onChange={(e)=>setaestadoSel(e.target.value)}>
  <option value="N">Pendiente</option>
  <option value="F">Fallido</option>
  <option value="C">Completado</option>
</select>
<input class="aceptarev" type='submit' value='Aceptar' />
        
          </form>
    
          </div>
   
 
 
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
    <td class="cajonform" type="text">{servicio.aseguradoraNombre}</td>
    </tr>
    <tr >
    <td class="enu"> <label>Expediente</label></td>
    <td class="cajonform" type="text" >{servicio.expediente}</td>
    </tr>
       
  </table>
  </div>
    
  <div class="vertical">
  

  <table >
    <tr>
    <td class="enu"> <label>Licencia Click</label></td>
    <td class="cajonform" type="text" >{servicio.licenciaClick}</td>
    </tr>
    <tr>
    <td class="enu"> <label>Contraseña</label></td>
    <td class="cajonform" type="text" >{servicio.contraseñaClick}</td>
    </tr>
    
    
  </table>
  </div>
  
  </div>
    
</div>
<div class="cajCab1">
          
           <h1>Detalles servicio</h1>
           
      
           </div>
           <div class="cuadro4">
  <div class="division">
  <div class="vertical">
  

  <table >
    <tr >
    <td class="enu"> <label>Tipo</label></td>
    <td class="cajonform" type="text" >{servicio.tipoServicio}</td>
    </tr>
    <tr >
    <td class="enu"> <label>Hora</label></td>
    <td class="cajonform" type="text" >{servicio.hora}</td>
    </tr>
       
  </table>
  </div>

  <div class="vertical">
  

  <table >
    <tr >
    <td class="enu"> <label>Origen</label></td>
    <td class="cajonform" type="text" >{servicio.origen}</td>
    </tr>
    <tr >
    <td class="enu"> <label>Destino</label></td>
    <td class="cajonform" type="text" >{servicio.destino}</td>
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
    <td class="cajonform" type="text" >{servicio.nombreAsegurado}</td>
    </tr>
    
       
  </table>
  </div>

  <div class="vertical">
  

  <table >
    <tr >
    <td class="enu"> <label>Telefono</label></td>
    <td class="cajonform" type="text" >{servicio.telefonoAsegurado}</td>
    </tr>
    <tr >
    <td class="enu"> <label>Placa</label></td>
    <td class="cajonform" type="text" >{servicio.placaAsegurado}</td>
    </tr>
       
  </table>
  </div>

  </div>
  </div>
  

</div>









    
    
    
  )
}

