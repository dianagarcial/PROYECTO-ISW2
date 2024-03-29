import Nav from '../operario/nav';
import '../../Styles/conServ.css'
import React, { useState, useEffect } from 'react';
import '../../Styles/cajon.css'
import '../../Styles/cajondatos.css'
import Axios from 'axios';
import {convertToCurrency} from '../../funciones/convertir'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const moment = require('moment');
// const moments = require('moment-range');
export const ReporteServicio = () => {

  const fecha = new Date();
    const mesActual = fecha.getMonth(); 
    const mes=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre', 'diciembre']
    
  const cont=0;
  const [operario, setOperario] = useState('');
  const [servicio, setServicio] = useState('');
  const [valorCobrar, setValorCobrar] = useState('');
  const [susServicios, setSusservicios] = useState('');
  const [serviPagado, setServipagado] = useState('');
  const[valorTotal,setValores]=useState('');
  
  const primerDiaMes = moment().subtract('months').startOf('month').format('MM')
    console.log(primerDiaMes);

    const ultimoDiaMes = moment().subtract('months').endOf('month').format('DD-MM-YYYY')
    console.log(ultimoDiaMes);

    // const range = moments().range(primerDiaMes, ultimoDiaMes);
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
   
    let valor;   
      const token = sessionStorage.getItem('token')

      const respuesta = await Axios.get('/api/servicio/saldoOperario/',{
        headers : {'x-token': token} 
    })
    
       console.log(respuesta.data.serOpe) 
      setValorCobrar(respuesta.data.serOpe)
    }


    const busqdata = (cobro,servicio) => { 
    let acum=0;
 
      cobro && cobro.length>0 && cobro.map((item)=>{
        const valueid= sessionStorage.getItem('uid'); 
                
        if(item._id===valueid){   
            
          setSusservicios(item.servicios)
          console.log(item.servicios) 
          
     
        }
    })
  
    servicio && servicio.length>0 && servicio.map((item)=>{
      let fechad =moment(item.fecha).format('MM') 
      if(item.estadoServicio==false && fechad === primerDiaMes){ 
     
        console.log(fechad)
        console.log(item.valor)
        acum+=(item.valor); 
     

    }
   
    }
    
   
  )
  console.log(acum)
  setValores(acum)
  if(acum===0){
    document.getElementById('valorsito').innerHTML=' '
  }else{
  document.getElementById('valorsito').innerHTML=convertToCurrency(acum)
  document.getElementById('btnvc').innerHTML='Total a cobrar por el mes de '+mes[mesActual]+' :'
}
 
  
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
  console.log(respuesta.data.serOpe)

    
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
  const exportPDF=()=>{
    const input =document.getElementById('contServ')
    
    html2canvas(input,{logging:true, letterRendering: 1,useCORS:true}).then(canvas =>{
      const imgWidth=200;
      const imgHeight=canvas.height*imgWidth/canvas.width;
      const imgData =canvas.toDataURL('img/png');
      const pdf= new jsPDF('p','mm','a4');
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('EC'+mes[mesActual]+'.pdf')
    })
  
}

  useEffect(() => {
    mostrarDPersonal()
    mostarServicoOpe()
    busqdata(valorCobrar,susServicios)
 

    mostrardatosid()
    
   
  }, [])
  return (
    
    <div>
      <Nav></Nav>
    <div class="contServ" id='contServ'>
    <h1>Operario: {operario.nombre_completo}</h1>
    <h2>Aqui se encuentran todos los servicios realizados para el operario</h2>
    
   <div class="cajDatosOpe">
   <div class="cajDa">
  <button class='presiona'id='btnvc' onClick={()=>busqdata(valorCobrar,susServicios)}>¡Presiona para conoce el valor a cobrar por el mes de {mes[mesActual]}!</button>
  <h4 id='valorsito'> </h4>
  </div>
  <div class='ver'>
  <button class='verbtn'  onClick={()=>exportPDF()}>Descargar</button>



    </div>
    </div>
  <h1>Información personal</h1>  
    <div class="cajCab1">
  <h1>{operario.nombre_completo} </h1>
 
  </div>
  <div class="cuadro4">
  <div class="division">
  <div class="vertical">
  

  <table >
    <tr >
    <td class='peq'> <label>Cedula</label></td>
    <td class='gra'><label>{operario.cedula}</label></td>
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
  <h1>{operario.nombre_completo} </h1>
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
                        <th>Fecha</th>
                        <th>Valor</th>
                       
                        

                    </tr>
                    {servicio && servicio.length>0 && servicio.map((item)=>{
                      let fechad =moment(item.fecha).format('MM') 
                     if(item.estadoServicio !='N' && fechad===primerDiaMes){
                     return  <tr class="tcentrar">
                     <td class='tcentrar'>  {item.aseguradoraNombre}  </td>
                     <td class='tcentrar'>  {item.expediente}  </td>
                     <td class='tcentrar'>  {busEstados(item.estadoServicio)}  </td>
                     <td class='tcentrar'>  {moment(item.fecha).format('DD-MM-YYYY')}  </td>
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
