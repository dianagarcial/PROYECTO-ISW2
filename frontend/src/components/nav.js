


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
            <a href="/"><img class="logos" src='https://i.ibb.co/J3D3BM9/logo.png'/></a>
            </div>
                
            </div>
        </nav>
    </header> 
    );
}
export default Nav;