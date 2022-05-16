
import'../Loginope'
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

//import { useAuth } from '../../context/AuthContext';
import Nav from '../operario/nav';
import '../../Styles/conServ.css'

import '../../Styles/cajon.css'
import '../../Styles/cajondatos.css'
import '../../Styles/btn.css'
import Axios from 'axios';
import Swal from 'sweetalert2';


export const HomeOperario = () => {
  //const { logout, currentUser } = useAuth();
  const history = useHistory();

  
  const [operario, setOperario] = useState([]);
  const [estado, setEstado] = useState('');
  const mostrarDPersonal = async()=>{
    const value= sessionStorage.getItem('uid');
        console.log(value)
 
      const token = sessionStorage.getItem('token')

      const respuesta = await Axios.get('/api/operario/idOperario/'+value,{
        headers : {'x-token': token}
    })
    
      console.log(respuesta.data.opeId.estado)
      setEstado(respuesta.data.opeId.estado)
      
     
  }

  const actualizarEstado=async () =>{
   // e.preventDefault();
    
    const value= sessionStorage.getItem('uid');
    
   
   
    const token = sessionStorage.getItem('token')
    const res=await Axios.put('/api/operario/'+value+'/'+estado,{
      headers: {'token':token}
    })
    const ok =res.data.ok
    //console.log(ok)
    
  }

  function verificarActivo(estado){
    
    actualizarEstado()
    let input = document.getElementById('switch-label');
    let button = document.getElementById("serviciobtn");
    // input.addEventListener("change", stateHandle);
    // function stateHandle() {
    //   if (input.checked) {
    //     setEstado('A')
    //     button.disabled = false; 
    //   } else {
    //     setEstado('O')
    //     button.disabled = true;
    //   }
    //  }
        
  }

  const most= () =>{
    if(estado==='A'){
      document.getElementById('switch-label').setAttribute('checked', 'checked')
    }

  }


 
  const conServicio = async (e) => {
    e.preventDefault();
    
      history.push('/reporteOperario');
    
  }

  const generaRep=async (e) => {
    e.preventDefault();
    //BUSCAR EN LA BD
      history.push('/reportePendiente');
    
  }

  useEffect(() => {
    mostrarDPersonal()
    


  }, [])
  return (
    
    <div>
      <Nav></Nav>
    
      <div class="contenedor">
        <div class="Cajon">
            <h1>Sistema de gestion integral de servicios</h1>
            <p class='caj'>Revisa tus servicios y tus pagos</p>
            
        </div>
        <div class="cajCabTot1">
  <h1 class="h1bot">Estado </h1>
  {verificarActivo(operario.estado)}

 {most()}

  <div class='ver'>
  <div class="switch-button">
 
    <input type="checkbox" name="switch-button" id="switch-label" class="switch-button__checkbox"/>

    <label for="switch-label" class="switch-button__label"></label>
</div>
  </div>
    
    </div>
       
      <div class='planIni'>
           
    
      
      <button className='registro' onClick={conServicio} >
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">Consultar los servicios</h1>
      </div>
      <img class="imgreg" src="https://i.ibb.co/1Xxm3c5/Audit-1.png" alt="Writer-male" border="0"/>
      <h2 class="h2bot">Consulta los servicios realizados, asignados  <br/>y pasados </h2>
      </div>
      </button>

      <button className='registro' id='serviciobtn' onClick={generaRep} >
      <div class="bot1-t" id='serviciobtn1' >
      <div class="tit" id='serviciobtn2'>
      <h1 class="h1bot" id='serviciobtn3'>Servicios pendientes</h1>
      </div>
      
      <img id='serviciobtn4'class="imgreg" src="https://i.ibb.co/RcGRy2g/Statistic-Document-1.png" alt="Writer-male" border="0"/>
      <h2 id='serviciobtn5'class="h2bot">Consulta los servicios pendientes <br/> asignados</h2>
      </div>
      </button>

      
      
      </div>  
      
    </div>
    </div>
        
  )
}

