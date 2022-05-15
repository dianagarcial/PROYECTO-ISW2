import '../Styles/login.css'
import '../Styles/index.css'
import Nav from './nav'



export const Index = () => {

  

  return (
    <div>
    <Nav></Nav>  
    <div class="fondoLog">
    <div class="combologi">
    <div class='plan'>
    <a href='/administrador' className='reIndex'>
      <div class="cajonIndex">
      <div class="tit">
     
      </div>
      
      <img class="imgaseg" src="https://i.ibb.co/svk22TM/agente-de-servicio-al-cliente.png" alt="imagen"/>
      <h2 class='linkl'>Administrador</h2>
      </div>
      </a>




      <a href='/operario' className='reIndex'>
      <div class="cajonIndex">
      <div class="tit">
     
      </div>
      
      <img class="imgaseg" src="https://i.ibb.co/Y8MC1XV/conductor-2.png" alt="imagen"/>
      <h2 class='linkl'>Operario</h2>
      </div>
      </a>

      </div>
        </div>
        </div>
        </div>
 
      

        
  
  )
}