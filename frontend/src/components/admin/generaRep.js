import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import Nav from '../nav';
import '../../Styles/conServ.css'
import '../../Styles/tablas.css'
import '../../Styles/cajon.css'
import '../../Styles/cajondatos.css'


export const GeneraReporte = () => {
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  const [error, setError] = useState('');


  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      setError('Server Error')
    }
  }

  const aseguradora = async (e) => {
    e.preventDefault();
    
      history.push('/aseguradora');
    
  }

  const buscaOp=async (e) => {
    e.preventDefault();
    //BUSCAR EN LA BD
      history.push('/busca');
    
  }
  return (
    
    <div>
      <Nav></Nav>
    <div class="contServ">
    <h1>Generar reportes</h1>
    <h2>En esta sección se pueden generar reportes segun las nececidades, seleccionando obligatoriamente el mes y generando el reporte deseado</h2>

  
    <form action="" method="post">
    <div class="contecaj">
  <div class="cajCab2">
  <label class="replabel">Mes*      </label>
  <select class="busRep"name="select">
            <option value="value1">Value 1</option>
            <option value="value2" selected>Value 2</option>
            <option value="value3">Value 3</option>
          </select>
  </div>
  <div class="cajCab2">
  <label class="replabel">Aseguradora</label>
  <select class="busRep"name="select">
            <option value="value1">Value 1</option>
            <option value="value2" selected>Value 2</option>
            <option value="value3">Value 3</option>
          </select>
  </div>
  <div class="cajCab2">
  <label class="replabel">Operario  </label>
  <select class="busRep"name="select">
            <option value="value1">Value 1</option>
            <option value="value2" selected>Value 2</option>
            <option value="value3">Value 3</option>
          </select>
  </div>
  </div>
  <div class="btn-desc">
  <button name="add" class="desRep">Generar reporte</button>
  </div>
</form>
</div>
</div>
    
  )
}

