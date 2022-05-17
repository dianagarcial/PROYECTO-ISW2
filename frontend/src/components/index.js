import '../Styles/login.css'
import '../Styles/index.css'
import Nav from './nav'

import { useHistory } from 'react-router-dom';

export const Index = () => {
  const history = useHistory();

  const administrador = async (e) => {
    e.preventDefault();
    
      history.push('/administrador');
    
  }

  const operario = async (e) => {
    e.preventDefault();
    
      history.push('/operario');
    
  }

  

  return (
    <div>
    <Nav></Nav>  
    <div class="contenedor">
    <div class="Cajon">
            <h1>Sistema de gestion integral de servicios</h1>
            <p class='caj'>Elige tu perfil para continuar</p>
            
        </div>
    <div class='planindex'>

    <button className='registro' onClick={administrador} >
    <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">Administrador</h1>
      </div>
      <img class="imgreg" src="https://i.ibb.co/QjTz8cW/servicio-al-cliente.png" alt="Writer-male" border="0"/>
      <h2 class="h2bot">Asigna servicios a los operarios disponibles y consulta las cuentas a pagar a operarios y aseguradoras</h2>
      </div>
      </button>




      <button className='registro' onClick={operario} >
      <div class="bot1-t">
      <div class="tit">
      <h1 class="h1bot">Operario</h1>
      </div>
      <img class="imgreg" src="https://i.ibb.co/m6X3gbC/conductor-3.png" alt="Writer-male" border="0"/>
      <h2 class="h2bot">Consulta los servicios asignados y los detalles de los realizados, ademas de tu cuenta por cobrar </h2>
      </div>
      </button>

      </div>
       
        </div>
        </div>
 
      

        
  
  )
}