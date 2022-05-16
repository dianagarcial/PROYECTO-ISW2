import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// import { useAuth } from '../../context/AuthContext';
import NavA from '../admin/nav';
import '../../Styles/conServ.css'
import '../../Styles/tablas.css'
import '../../Styles/cajon.css'
import '../../Styles/cajondatos.css'
import Axios from 'axios';

export const GeneraReporte = () => {
  // const { logout, currentUser } = useAuth();
  const history = useHistory();
  let arr=[]
  
  const [error, setError] = useState('');
  const [aseguradoras,setaseguradoras]=useState([])
  const [aseguradoraSel,setAseguradoraSel]=useState([])
  const [mese,setMes]=useState([])
  const [meseSel,setMesSel]=useState([])

  const [operarios,setOperarios]=useState([])
  const [operariosd,setOperariosd]=useState([])
  
 



  // const handleLogout = async () => {
  //   try {
  //     await logout();
  //     history.push('/login');
  //   } catch (error) {
  //     setError('Server Error')
  //   }
  // }

  const aseguradora = async (e) => {
    e.preventDefault();
    
      history.push('/aseguradora');
    
  }

  const buscaOp=async (e) => {
    e.preventDefault();
    //BUSCAR EN LA BD
      history.push('/busca');
    
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
      
      arr.push(item.cedula)
    })
  
   
    console.log(arr)
    for(var i in arr)
    { 
        document.getElementById("selnom").innerHTML += "<option value='"+arr[i]+"'>"+arr[i]+"</option>"; 
  
    }
    
  }

  const obtener=async () =>{
    console.log(aseguradoraSel)

  }
  

  

  useEffect(() => {
  setaseguradoras(['Suramericana','Bolivar','A365','iKEA','GEA Colombia', 'Assiprex'])
  setMes(['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre', 'Diciembre'])
  obtenerOperarios()
 

  
  },[])

  
  return (
    
    <div>
       <NavA></NavA>
    <div class="contServ">
    <h1>Generar reportes</h1>
    <h2>En esta sección se pueden generar reportes segun las nececidades, seleccionando obligatoriamente el mes y generando el reporte deseado</h2>

  
    <form action="" method="post">
    <div class="contecaj">
  <div class="cajCab2">
  <label class="replabel">Mes*      </label>
  <select class="busRep"name="select" onChange={(e)=>setAseguradoraSel(e.target.value)}>
  {
            aseguradoras.map(item=>(
              <option key={item}>{item}</option>
            ))
          }
          </select>
  </div>
  <div class="cajCab2">
  <label class="replabel">Aseguradora</label>
  <select class="busRep"name="select" onChange={(e)=>setMesSel(e.target.value)}>
  {
            mese.map(item=>(
              <option key={item}>{item}</option>
            ))
          }
          </select>
  </div>
  <div class="cajCab2">
  <label class="replabel">Operario  </label>
  <select class="busRep" id='selnom' type="text" onChange={(e)=>setOperariosd(e.target.value)}>
         
          </select>
  </div>
  </div>
  <div class="btn-desc">
  <button name="add" class="desRep" onClick={()=> obtener()}>Generar reporte</button>

  </div>
</form>
</div>
</div>
    
  )
}

