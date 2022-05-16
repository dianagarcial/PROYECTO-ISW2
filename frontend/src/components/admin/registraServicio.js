import React, { useState, useEffect } from 'react';
//import { useHistory, useState, useE} from 'react-router-dom';
//import { useAuth } from '../../context/AuthContext';
import NavA from '../admin/nav';
import '../../Styles/conServ.css'
import '../../Styles/cajon.css'
import '../../Styles/cajondatos.css'
import Axios from 'axios';
import Swal from 'sweetalert2';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const moment = require('moment');


export const RegistraServicio = () => {
  // const { logout, currentUser } = useAuth();
  //const history = useHistory();

  
  let arr=[]
  const [aseguradora,setaseguradora]=useState([])
  const [aseguradoraSect,setaseguradoraSect]=useState([])
  const [expediente,setExpediente]=useState('')
  const [licenciaClick,setlicenciaclick]=useState('')
  const [contraseñaClick,setcontraseñaClick]=useState('')
  const [estadoServicio,setestadoServicio]=useState('')

  const [tipoServicio,settipoServicio]=useState([])
  const [tipoSel,setTipoSel]=useState([])
  const [fecha,setFecha]=useState('')
  const [hora,setHora]=useState('')
  const [origen,setOrigen]=useState('')
  const [destino,setDestino]=useState('')
  

  const [nombreAsegurado,setNombreAsegurado]=useState('')
  const [telefonoAsegurado,setTelefonoAsegurado]=useState('')
  
  const [placaAsegurado,setPlacaAsegurado]=useState('')
  
  
  const [operario,setCedula]=useState('')
  // const [cedulas,setCedulas]=useState([])

  
  const [operarios,setOperarios]=useState([]);
  //const [nombreOpe,setNombreOpe]=useState('');
  
  let hoy= moment().format('YYYY-MM-DD');

  useEffect(() => {
    // obtenerOperarios();
    obtenerOperarios();
    setestadoServicio('N');
    //busqCedula();
    valorRes();
    
    setTipoSel('Familiar')
    setaseguradoraSect('Suramericana')
    
    setaseguradora(['Suramericana','Bolivar','A365','iKE Asistencia','GEA Colombia', 'Assiprex'])
    settipoServicio(['Familiar','Elegido'])

  }, [])

  // const asignarOpe =async (nombre) => {
  //   const token=sessionStorage.getItem('token')
  //   const res= await Axios.get('/api/operario/nom', nombre,{
  //     headers: {'x-token':token}
  //   })
  //   console.log(res.data)
   


  // }
  // const obtenerOperarios=async () =>{
  // const token=sessionStorage.getItem('token')
  // const res=await Axios.get('/api/operario/listaOperarios',{
  //   headers: {'x-token':token}
  // })

  // setOperarios(res.data)
  // console.log(res.data)

  // const aux= res.data.operarios;
  // const nombresOpera= aux.map(function(item){
  //   return item.nombreCompleto
  // })

  // setNombreOpe(nombresOpera)
  // console.log(nombresOpera)

  // const busqCedula=async () =>{
  //  const token=sessionStorage.getItem('token')
  //  const res=await Axios.get('/api/operario/cedulaOpe',{
  //    headers: {'x-token':token}
  //   })

  //  setCedulas(res.data)
  //  console.log(res.data)

  // //  const aux= res.data.operarios;
  // //  const nombresOpera= aux.map(function(item){
  // //    return item.nombreCompleto
  // //  })

  // }

  // setNombreOpe(nombresOpera)
  // console.log(nombresOpera)

  




  // }
  function valorRes(sel){
    if(sel==='Familiar'){
      console.log(sel)
      return 20000
      
    }else{      
      console.log(sel);
      return 14000;
    }
  }

  const obtenerOperarios=async () =>{
    const token=sessionStorage.getItem('token')
    const res=await Axios.get('/api/operario/listaOperarios',{
      headers: {'x-token':token}
    })
  
    setOperarios(res.data)
    console.log(res.data)
  
    const aux= res.data.operarios;
    
    
    console.log(aux)
    aux.map(function(item){
      if(item.estado==='A'){
      arr.push(item.cedula)}
    })
  
   
    console.log(arr)
    for(var i in arr)
    { 
        document.getElementById("selnom").innerHTML += "<option value='"+arr[i]+"'>"+arr[i]+"</option>"; 
  
    }
    
  }
  




  

  const crearServicio=async (e) =>{
    e.preventDefault();

    
    const servicio= {
      tipoServicio:tipoSel,
      fecha,
      hora,
      origen,
      destino,
      valor:valorRes(tipoSel),
      licenciaClick,
      contraseñaClick,
      nombreAsegurado,
      placaAsegurado,
      telefonoAsegurado :parseFloat(telefonoAsegurado),
      expediente: parseFloat(expediente),
      aseguradoraNombre: aseguradoraSect,
      estadoServicio,  
      operario: parseFloat(operario),
   
      
    };   

    console.log(servicio)
   
    
    if(expediente==='' ){
      Swal.fire({
        icon: 'error',
        title: 'Por favor, digite el numero de expediente',
        showConfirmButton: false,
        timer: 1500
        
      });
    }else if(licenciaClick===''){ //VALIDAR FORMATO CORREO
      Swal.fire({
        icon: 'error',
        title: 'Por favor, digite la licencia click en el formato correcto',
        showConfirmButton: false,
        timer: 1500
        
      });
    }else if(contraseñaClick===''){
      Swal.fire({
        icon: 'error',
        title: 'Por favor, digite la contraseña',
        showConfirmButton: false,
        timer: 1500
        
      });
    }else if(fecha===''){
      Swal.fire({
        icon: 'error',
        title: 'Por favor, digite la fecha de realizacion del servicio',
        showConfirmButton: false,
        timer: 1500
        
      });
    }else if(hora===''){
      Swal.fire({
        icon: 'error',
        title: 'Por favor, digite la hora de realizacion del servicio',
        showConfirmButton: false,
        timer: 1500
        
      });
    }else if(origen===''){
      Swal.fire({
        icon: 'error',
        title: 'Por favor, digite la direccion de origen del servicio',
        showConfirmButton: false,
        timer: 1500
        
      });
    }else if(destino===''){
      Swal.fire({
        icon: 'error',
        title: 'Por favor, digite la direccion de origen del servicio',
        showConfirmButton: false,
        timer: 1500
        
      });
    }else if(operario===''){
      Swal.fire({
        icon: 'error',
        title: 'Por favor, seleccione la cedula del operario',
        showConfirmButton: false,
        timer: 1500
        
      });
    }else{
    //VALIDACIONES VACIOS 
    //ELSE 
    const token=sessionStorage.getItem('token')
    const res=await Axios.post('/api/servicio/newServicio',servicio,{
      headers: {'token':token}
    })
    const ok =res.data.ok
    console.log(ok)
    if(!ok){

      Swal.fire({
        icon: 'error',
        title: 'Servicio registrado exitosamente',
        showConfirmButton: false,
        timer: 1500});
    }else{
    Swal.fire({
      icon: 'success',
      title: 'Servicio registrado exitosamente',
      showConfirmButton: false,
      timer: 1500
      
    });
  }

   // e.target.reset();//Se limpia el formulario
    

  }

}

  

  

  const exportPDF=()=>{
    const input =document.getElementById('contenidopdf')
    if (document.getElementById('checkbox').checked){
    html2canvas(input,{logging:true, letterRendering: 1,useCORS:true}).then(canvas =>{
      const imgWidth=200;
      const imgHeight=canvas.height*imgWidth/canvas.width;
      const imgData =canvas.toDataURL('img/png');
      const pdf= new jsPDF('p','mm','a4');
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('servicio.pdf')
    })
  }
}


  
  return (
    
    <div>
      <NavA></NavA>
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
        <td><input class="cajonform" type="number" onChange={(e)=>setExpediente(e.target.value)}></input></td>
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
        <td><input class="cajonform" type="date" min={hoy} onChange={(e)=>setFecha(e.target.value)}></input></td>
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
        <td class="enu"> <label>Destino*</label></td>
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
        <td><input class="cajonform" type="number" onChange={(e)=>setTelefonoAsegurado(e.target.value)}></input></td>
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
        <td class="enu"> <label>Cedula</label></td>
        <td><select class="cajonform" id='selnom' type="text" onChange={(e)=>setCedula(e.target.value)}>
          <option value="">Seleccione</option>
          </select></td>
        
        </tr>
      
          
      </table>
      </div>

      <div class="vertical">
      

     
      </div>
      </div>

      </div>
      </div>
      </div>
      <div class="check">
      <input type="checkbox" id="checkbox"></input>
      <h2>Guardar imagen del servicio</h2>
      </div>

      <div class="btn-desc">
      <input class="desRep" type='submit' value='Guardar servicio' onClick={()=>exportPDF()} />
      
      </div>


    </form>
   
   
   
</div>










    
    
    
  )
}


