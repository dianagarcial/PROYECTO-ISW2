import React, { useState, useEffect } from 'react';
import { useHistory} from 'react-router-dom';

//import { useAuth } from '../../context/AuthContext';
import Nav from '../nav';
import '../../Styles/conServ.css'

import '../../Styles/cajon.css'
import '../../Styles/cajondatos.css'
import Axios from 'axios';
import Swal from 'sweetalert2';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const RegistraServicio = () => {
  // const { logout, currentUser } = useAuth();
  const history = useHistory();

  

  const [aseguradora,setaseguradora]=useState([])
  const [aseguradoraSect,setaseguradoraSect]=useState([])
  const [expediente,setExpediente]=useState('')
  const [licenciaclick,setlicenciaclick]=useState('')
  const [contraseñaClick,setcontraseñaClick]=useState('')

  const [tipoServicio,settipoServicio]=useState([])
  const [tipoSel,setTipoSel]=useState([])
  const [fecha,setFecha]=useState('')
  const [hora,setHora]=useState('')
  const [origen,setOrigen]=useState('')
  const [destino,setDestino]=useState('')
  const [valor, setValor]=useState('')

  const [nombreAsegurado,setNombreAsegurado]=useState('')
  const [telefonoAsegurado,setTelefonoAsegurado]=useState('')
  const [apellidoAsegurado,setApellidoAsegurado]=useState('')
  const [placaAsegurado,setPlacaAsegurado]=useState('')
  
  const [operario,setOperario]=useState('')
  const [operarios,setOperarios]=useState([])
  
  const [nombreOpe,setNombreOpe]=useState([])
  const [nombreOpeSelect,setNombreOpeSelect]=useState([])
  const [cedulaOpe,setCedulaOpe]=useState('')






  const [error, setError] = useState('');

  useEffect(() => {
    obtenerOperarios();
    setaseguradora(['Suramericana','Bolivar','A365','iKEA','GEA Colombia', 'Assiprex'])
    settipoServicio(['Familiar','Elegido', 'otro'])

  }, [])


  const obtenerOperarios=async () =>{
  const token=sessionStorage.getItem('token')
  const res=await Axios.get('/api/operario/listaOperarios',{
    headers: {'x-token':token}
  })

  setOperarios(res.data)
  //console.log(res.data)

  const aux= res.data.operarios;
  const nombresOpera= aux.map(function(item){
    return item.nombre_completo
  })

  setNombreOpe(nombresOpera)
  console.log(nombresOpera)




  }

  




  const buscaOp=async (e) => {
    e.preventDefault();
    //BUSCAR EN LA BD
      history.push('/busca');
    
  }

  const crearServicio=async (e) =>{
    e.preventDefault();
    const servicio= {
      tipoServicio:tipoSel,
      fecha,
      hora,
      origen,
      destino,
      valor:valorPagado(),
      licenciaclick,
      contraseñaClick,
      nombreAsegurado,
      placaAsegurado,
      telefonoAsegurado,
      expediente,
      aseguradora:aseguradoraSect,
      estadoServicio:'N',    
      operario:cedulaOpe

    }    

    //VALIDACIONES VACIOS 
    //ELSE 

    const token=sessionStorage.getItem('token')
    const res=await Axios.post('/api/servicio/newServicio',servicio,{
      headers: {'x-token':token}
    })
    const ok =res.data.ok
    Swal.fire({
      icon: 'success',
      title: 'Servicio registrado exitosamente',
      showConfirmButton: false,
      timer: 1500
      
    });

    e.target.reset();//Se limpia el formulario
    

  }

  const asignarOpe =async (nombre) => {
    const token=sessionStorage.getItem('token')
    const res= await Axios.get('/api/operario/nom', nombre,{
      headers: {'x-token':token}
    })
    console.log(res.data)
   





    

  }

  const valorPagado =async (tipoSel) => {
    if(tipoSel=='Familiar'){
      return setValor(20.000)
    }else if (tipoSel=='Elegido'){
      return setValor(14.000)

    }else{
      return setValor(10.000)
    }

    
   
    

  }

  

  const exportPDF=()=>{
    const input =document.getElementById('contenidopdf')
    html2canvas(input,{logging:true, letterRendering: 1,useCORS:true}).then(canvas =>{
      const imgWidth=200;
      const imgHeight=canvas.height*imgWidth/canvas.width;
      const imgData =canvas.toDataURL('img/png');
      const pdf= new jsPDF('p','mm','a4');
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('servicio.pdf')
    })
  }


  
  return (
    
    <div>
      <Nav></Nav>
      <form onSubmit={crearServicio} >
      <div id='contenidopdf'>
      
        <div className="contServ" >
        <h1>Creación de un servicio</h1>
        <h2>Ingresa la informacion del servicio (Las entradas marcadas con * con obligatorias)</h2>
          
            <div class="cajCab1">
                  <div class="cabeBusq">
                  <h1>Detalles aseguradora</h1>
                  
                  </div>
            </div>
        
      <div class="cuadro4">
      <div class="division">
      <div class="vertical">
      

      <table >
        <tr >
        <td class="enu"> <label>Aseguradora*</label></td>
        <td><select class="cajonform" type="text" onChange={(e)=>setaseguradoraSect(e.target.value)}>
          {
            aseguradora.map(item=>(
              <option key={item}>{item}</option>
            ))
          }
          </select></td>
        </tr>
        <tr >
        <td class="enu"> <label>Expediente*</label></td>
        <td><input class="cajonform" type="text" onChange={(e)=>setExpediente(e.target.value)}></input></td>
        </tr>
          
      </table>
      
      </div>
        
      <div class="vertical">
      

      <table >
        <tr>
        <td class="enu"> <label>Licencia Click*</label></td>
        <td><input class="cajonform" type="text" onChange={(e)=>setlicenciaclick(e.target.value)}></input></td>
        </tr>
        <tr>
        <td class="enu"> <label>Contraseña*</label></td>
        <td><input class="cajonform" type="text" onChange={(e)=>setcontraseñaClick(e.target.value)}></input></td>
        </tr>
        
        
      </table>
      </div>
      
      
      </div>
      
        
    </div>

    <div class="cajCab1">
              <div class="cabeBusq">
              <h1>Detalles servicio</h1>
              
              </div>
              </div>
              <div class="cuadro4">
      <div class="division">
      <div class="vertical">
      

      <table >
        <tr >
        <td class="enu"> <label>Tipo*</label></td>
        <td><select class="cajonform" type="text" onChange={(e)=>setTipoSel(e.target.value)}>
        {
            tipoServicio.map(item=>(
              <option key={item}>{item}</option>
            ))
          }
          </select></td>
        </tr>
        <tr >
        <td class="enu"> <label>Fecha*</label></td>
        <td><input class="cajonform" type="date" onChange={(e)=>setHora(e.target.value)}></input></td>
        </tr>
        <tr >
        <td class="enu"> <label>Hora*</label></td>
        <td><input class="cajonform" type="time" onChange={(e)=>setHora(e.target.value)}></input></td>
        </tr>
          
      </table>
      </div>

      <div class="vertical">
      

      <table >
        <tr >
        <td class="enu"> <label>Origen*</label></td>
        <td><input class="cajonform" type="text" onChange={(e)=>setOrigen(e.target.value)}></input></td>
        </tr>
        <tr >
        <td class="enu"> <label>Destino</label></td>
        <td><input class="cajonform" type="text" onChange={(e)=>setDestino(e.target.value)}></input></td>
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
        <td class="enu"> <label>Nombre*</label></td>
        <td><input class="cajonform" type="text" onChange={(e)=>setNombreAsegurado(e.target.value)}></input></td>
        </tr>
       
          
      </table>
      </div>

      <div class="vertical">
      

      <table >
        <tr >
        <td class="enu"> <label>Telefono*</label></td>
        <td><input class="cajonform" type="text" onChange={(e)=>setTelefonoAsegurado(e.target.value)}></input></td>
        </tr>
        <tr >
        <td class="enu"> <label>Placa*</label></td>
        <td><input class="cajonform" type="text" onChange={(e)=>setPlacaAsegurado(e.target.value)}></input></td>
        </tr>
          
      </table>
      </div>

      </div>
      </div>
      
      <div class="cajCab1">
              <div class="cabeBusq">
              <h1>Detalles operario</h1>
              
              </div>
              </div>
              <div class="cuadro4">
      <div class="division">
      <div class="vertical">
      

      <table >
        <tr >
        <td class="enu"> <label>Nombre*</label></td>
        <td><select class="cajonform" type="text" onChange={(e)=>asignarOpe(e.target.value)}>
        {
            nombreOpe.map(item=>(
              <option key={item}>{item}</option>


            ))
          }
          </select></td>
        </tr>
      
          
      </table>
      </div>

      <div class="vertical">
      

      <table >
        <tr >
        <td class="enu"> <label>Cedula</label></td>
        {/* <td><input class="cajonform" type="number" name="tservicio" onChange={(e)=>asignarOpe(e.target.value)}></input></td> */}
        
        </tr>
      
          
      </table>
      </div>
      </div>

      </div>
      </div>
      </div>
      <div class="check">
      <input type="checkbox"></input>
      <h2>Guardar imagen del servicio</h2>
      </div>

      <div class="btn-desc">
      <input class="desRep" type='submit' value='Guardar servicio' />
      
      </div>


    </form>
   
   
   <button onClick={()=>exportPDF()}>Imprimir</button>   
   
</div>










    
    
    
  )
}

