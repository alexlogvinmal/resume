import './foto.css';
import logo from '../img/foto.png';



export function EnFoto() {

    return (
              
        <div className="foto">
            <img  src={logo} /> 
            <div className="foto1"><b>Logvinov Alexander</b></div>
            <div className="foto2"><small>Front End Developer</small></div>
        </div>
    )

}