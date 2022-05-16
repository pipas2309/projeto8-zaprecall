//ROUTER - REACK
import { Link } from 'react-router-dom';

//IMPORT CSS & MEDIA
import logo from '../assets/media/logo.png';


export default function BoasVindas () {
    return (
        <div className="boas-vindas">
            <img src={logo} alt="Logo Zap Recall" />
            <h1>ZapRecall</h1>
            <Link to="/metas">
                <button>Iniciar Recall!</button>
            </Link>
        </div>
    );
}