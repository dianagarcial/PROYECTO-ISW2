
// import { useAuth } from '../context/AuthContext';
import '../../Styles/nav.css'

function NavA (){





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
            <a href="/home"><img class="logos" src='https://i.ibb.co/J3D3BM9/logo.png'/></a>
            </div>
                <div class="nav-nom">
                    
                    <button className='logout-button' onClick={logout}>Salir</button>
                    
                    
                </div>
            </div>
        </nav>
    </header> 
    );
}
export default NavA;