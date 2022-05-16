//ROUTER
import { Link } from 'react-router-dom';

//REACT
import React from 'react';

//IMPORT CSS & MEDIA
import logo from '../assets/media/logo.png';


export default function Decks() {   
    const [deck, setDeck] = React.useState('');
    let temAviso = true; 
    //UI DO AVISO SE META ERRADA
    const aviso = (
        <>
            <p>Escolha um Deck!</p>
            <button className='button-erro'>Iniciar Recall!</button>
        </>
    );
    
    //LOGICA DO AVISO
    if(deck < 1) {
        temAviso = true;
    } else {
        temAviso = false;
    }

    //UI
    return (
        <div className="decks">
            <img src={logo} alt="Logo Zap Recall" />
            <h1>ZapRecall</h1>
            <select value={deck} onChange={deck => setDeck(deck.target.value)}>
                <option value="" disabled selected>Escolha seu deck Zap!</option>
                <option value={1}>Padrão</option>
                <option value={2}>Padrão</option>
                <option value={3}>Padrão</option>
                <option value={4}>Padrão</option>
            </select>
            {console.log(deck)}
            {temAviso ? aviso : 
            <Link to="/zapgame">
                <button>Iniciar Recall!</button>
            </Link>
            }
        </div>        
    );

}

