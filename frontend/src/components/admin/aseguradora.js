import React, { useState, useEffect } from 'react';

import {convertToCurrency} from '../../funciones/convertir'
import NavA from '../admin/nav';
import '../../Styles/conServ.css'
import '../../Styles/tablas.css'
import '../../Styles/cajon.css'
import '../../Styles/cajondatos.css'
import Axios from 'axios';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const moment = require('moment');


export const Aseguradora = () => {
  const fecha = new Date();
    const mesActual = fecha.getMonth(); 
    const mes=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre', 'diciembre']
    
  const cont=0;
  const [operario, setOperario] = useState('');
  const [nombreAseguradora, setNombreAseguradora] = useState();
  const [servicio, setServicio] = useState('');
  const [valorCobrar, setValorCobrar] = useState('');
  const [susServicios, setSusservicios] = useState('');
  const [serviPagado, setServipagado] = useState('');
  const[valorTotal,setValores]=useState('');

  
  const primerDiaMes = moment().subtract('months').startOf('month').format('MM')
    console.log(primerDiaMes);

   
    // const range = moments().range(primerDiaMes, ultimoDiaMes);
    const buscarAseguradora = async()=>{
      const valores = window.location.search;
      const urlParams = new URLSearchParams(valores)
      const values = urlParams.values()
  
  
      for (const value of values) {
  
        console.log(value)
        const token = sessionStorage.getItem('token')
  
        const respuesta = await Axios.get('/api/servicio/serAsegura/' + value ,{
          headers : {'x-token': token}
      })
        
        setNombreAseguradora(value)
        console.log(respuesta.data.serviciosAseguradora)
        setServicio(respuesta.data.serviciosAseguradora)
       
      }
 
  }



    const busqdata = (servicio) => { 
    let acum=0;
     
      console.log(servicio)
    servicio && servicio.length>0 && servicio.map((item)=>{
      
      let fechad =moment(item.fecha).format('MM') 
      if(item.estadoServicio !='N' && fechad === primerDiaMes){ 
     
        console.log(fechad)
        console.log(item.valor)
        acum+=(item.valor); 
     

    }
   
    }
    
   
  )
  console.log(acum)
  setValores(acum)
  
  document.getElementById('valorsito').innerHTML=convertToCurrency(acum)
  document.getElementById('btnvc').innerHTML='Total a pagar por el mes de '+mes[mesActual]+' :'

 
  
  }
  
  const sinServicio = (servicio) => { 
    if (servicio.length==0){
      document.getElementById('mser').innerHTML='No tiene'
    }
  }
  // //BUSCAR LOS OPERARIOS
  // const mostarServicoOpe= async()=>{
  //   const valores = window.location.search;
  //   const value= valores.substring(5)
    
    
  //   const token = sessionStorage.getItem('token')
  //   // const valor= 'ObjectId('+values+')'
    
  //   const respuesta = await Axios.get('/api/servicio/detOpe/' + value ,{
  //     headers : {'x-token': token}
  // })
  // //console.log(respuesta.data.serOpe);
  // setServicio(respuesta.data.serOpe);
  // console.log(respuesta.data.serOpe)

    
  // }
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
      pdf.save('EC'+nombreAseguradora+mes[mesActual]+'.pdf')
    })
  
}

  useEffect(() => {
    buscarAseguradora()
    //mostarServicoOpe()
    
    
   
    
   
  }, [])
  return (
    
    <div>
      <NavA></NavA>
    <div class="contServ" id='contServ'>
    <h1>Aseguradora: {nombreAseguradora}</h1>
    <h2>Aqui se encuentran todos los servicios realizados para esta aseguradora</h2>
   
    
   <div class="cajDatosOpe">
   <div class="cajDa">
  <button class='presiona'id='btnvc' onClick={()=>busqdata(servicio)}>¡Presiona para conoce el valor a pagar por el mes de {mes[mesActual]}!</button>
  <h4 id='valorsito'> </h4>
  </div>
  <div class='ver'>
  <button class='verbtn'  onClick={()=>exportPDF()}>Descargar cuenta</button>



    </div>
    </div>
  

  <h1>Despliegue y detalle</h1>
  
  <div class="cajCab1">
  <h1>{nombreAseguradora} </h1>
  </div>
  

    <div class="container-table100" id="tablaboton">
                
                    <div class="table100 ver1">


                        
                            <div class="table100-nextcols">
                                <table id="tablaini">
                                   
                                    
                                
    
                                <tbody id="cuerpoTabla">
                    <tr class='consulope'>
                                      
                                      
                        <th>Expediente</th>
                        <th>Servicio</th>
                        <th>Fecha</th>
                        <th>Placa</th>
                        <th>Estado</th>
                        <th>Valor</th>
                        
                        

                    </tr>
                    { 
                    servicio && servicio.length>0 && servicio.map((item)=>{
                      let fechad =moment(item.fecha).format('MM') 
                      if( fechad===primerDiaMes){
                     return  <tr class="tcentrar"id='mser'>
                       
                     <td class='tcentrar'>  {item.expediente}  </td>
                     <td class='tcentrar'>  {item.tipoServicio}  </td>
                     <td class='tcentrar'>  {(item.fecha).substring(0,10)}  </td>
                     <td class='tcentrar'>  {item.placaAsegurado}  </td>
                     <td class='tcentrar'>  {busEstados(item.estadoServicio)}  </td>
                     <td class='tcentrar'>  {convertToCurrency(item.valor)}  </td>
                     </tr>
                      }
                   
                  })
                  }

                  
                 </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            
            
         </div>

         
       
    
    </div>
    
    
    
  )
}