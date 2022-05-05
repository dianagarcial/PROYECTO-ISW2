import './App.css';
import { Login } from './components/Login';

import { Home } from './components/admin/Home';
import { ConServicio } from './components/admin/consServ';

import { RegistraServicio } from './components/admin/registraServicio';
import { GeneraReporte } from './components/admin/generaRep';
import { Aseguradora } from './components/admin/aseguradora';
import { DetOperario } from './components/admin/detOPerario';
/*Lo del operario*/
import { HomeOperario } from './components/operario/homeOpe';
import { ReporteServicio } from './components/operario/reporteOpe';
import { VerServicio } from './components/operario/servicioOpe';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (

    
    <>

    
      <Router>
    
          <Switch>
                       
            <Route exact path='/' component={Home} />
            <Route exact path='/conServi' component={ConServicio} />
            <Route exact path='/registraServicio' component={RegistraServicio} />
            <Route exact path='/generaReporte' component={GeneraReporte} />
            <Route exact path='/aseguradora' component={Aseguradora} />
            <Route exact path='/detOperario' component={DetOperario} />

            <Route exact path='/homeOperario' component={HomeOperario} />
            <Route exact path='/reporteOperario' component={ReporteServicio} />
            <Route exact path='/verServicio' component={VerServicio} />


            <Route exact path='/login' component={Login} />
            
            
            
           
          </Switch>
    
      </Router>
    </>
  );
}

export default App;
