import './App.css';
import { Login } from './components/Login';

import { Home } from './components/admin/Home';
import { ConServicio } from './components/admin/consServ';
import { AuthProvider } from './context/AuthContext';
import { RegistraServicio } from './components/admin/registraServicio';
import { GeneraReporte } from './components/admin/generaRep';
import { Aseguradora } from './components/admin/aseguradora';
import { DetOperario } from './components/admin/detOPerario';
/*Lo del operario*/
import { HomeOperario } from './components/operario/homeOpe';
import { ReporteServicio } from './components/operario/reporteOpe';
import { VerServicio } from './components/operario/servicioOpe';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (

    
    <>

    
      <Router>
        <AuthProvider>
          <Switch>
                       
            <PrivateRoute exact path='/' component={Home} />
            <PrivateRoute exact path='/conServi' component={ConServicio} />
            <PrivateRoute exact path='/registraServicio' component={RegistraServicio} />
            <PrivateRoute exact path='/generaReporte' component={GeneraReporte} />
            <PrivateRoute exact path='/aseguradora' component={Aseguradora} />
            <PrivateRoute exact path='/detOperario' component={DetOperario} />

            <PrivateRoute exact path='/homeOperario' component={HomeOperario} />
            <PrivateRoute exact path='/reporteOperario' component={ReporteServicio} />
            <PrivateRoute exact path='/verServicio' component={VerServicio} />


            <Route exact path='/login' component={Login} />
            
            
            
           
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
