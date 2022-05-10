
// import { useAuth } from '../../context/AuthContext';
import Nav from '../nav';
import '../../Styles/conServ.css'

import '../../Styles/cajon.css'
import '../../Styles/cajondatos.css'


export const ReportePendiente = () => {


 


  
  return (
    
    <div>
      <Nav></Nav>
    <div class="contServ">
    <h1>Operario: DAVID SANCHEZ</h1>
    <h2>Aqui se encuentran los servicios que se le han asignado y se encuentran por realizar</h2>
 
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
                 <tr>
                     <td class="tcentrar">Bolivar</td>
                     <td class="tcentrar">4559632</td>
                     <td class="tcentrar">Aceptado</td>
                     <td class="tcentrar">Elegido</td>
                     <td class="tcentrar">$14.000</td>
                     {/* <td class='tcentrar'><a className='logout-button' href={item.cedula ? "/detOPerario/?cedula=" + item.cedula : ""}>Detalles</a>  </td> */}
                     
             
                   
                 </tr>
                 <tr>
                     <td class="tcentrar">Bolivar</td>
                     <td class="tcentrar">4559632</td>
                     <td class="tcentrar">Aceptado</td>
                     <td class="tcentrar">Elegido</td>
                     <td class="tcentrar">$14.000</td>
                     
             
                   
                 </tr>

                
                 </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            
            
         </div>

         
       
    
    </div>
    
    
    
  )
}
