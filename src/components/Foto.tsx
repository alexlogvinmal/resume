import './foto.css';
import logo from '../img/foto.png';
export function Foto() {

    return (
 
        <div className="foto">
            <img  src={logo} /> 
            <div className="foto1"><b>Олександр Логвінов</b></div>
            <div className="foto2"><small>Front End Developer</small></div>
        </div>
    )

}