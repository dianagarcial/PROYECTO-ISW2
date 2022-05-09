


// import { useAuth } from '../context/AuthContext';
import '../Styles/nav.css'

function Nav (){





  const logout = async(e) =>{ 
    e.preventDefault()
    sessionStorage.clear()
    window.location.href= "/"
}
    
    return(
        <header>
            <nav>
            <div class="nav-bar">
            <div class="imgr">                       
            <img class="logos" src='https://i.ibb.co/J3D3BM9/logo.png'/>
            </div>
                <div class="nav-nom">
                    
                    <button className='logout-button' onClick={logout}>Salir</button>
                    
                    
                </div>
            </div>
        </nav>
    </header> 
    );
}
export default Nav;