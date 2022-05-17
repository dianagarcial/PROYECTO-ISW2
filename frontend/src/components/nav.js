


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
            <a href="/"><img class="logos" src='https://i.ibb.co/0rcChvc/Property-1-Default.png'/></a>
            </div>
                
            </div>
        </nav>
    </header> 
    );
}
export default Nav;