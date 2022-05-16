//ROUTER - REACK
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import React from 'react';

//IMPORT CSS & MEDIA
import logo from '../assets/media/logo.png';


export default function Decks() {   
    const [deck, setDeck] = React.useState('');
    let meta = useLocation().state;
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

    //DECKS
    const decks = [
        {
            id: 1,
            pergunta: 'O que é JSX?',
            resposta: 'Uma extensão de linguagem do JavaScript'
        }, {
            id: 1,
            pergunta: 'O React é...',
            resposta: 'uma biblioteca JavaScript para construção de interfaces'
        }, {
            id: 1,
            pergunta: 'Componentes devem iniciar com...',
            resposta: 'letra maiúscula'
        }, {
            id: 1,
            pergunta: 'Podemos colocar ... dentro do JSX',
            resposta: 'expressões'
        }, {
            id: 1,
            pergunta: 'O ReactDOM nos ajuda...',
            resposta: 'interagindo com a DOM para colocar componentes React na mesma'
        }, {
            id: 1,
            pergunta: 'Usamos o npm para...',
            resposta: 'gerenciar os pacotes necessários e suas dependências'
        }, {
            id: 1,
            pergunta: 'Usamos props para...',
            resposta: 'passar diferentes informações para componentes'
        }, {
            id: 1,
            pergunta: 'Usamos estado (state) para...',
            resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
        },
        {
            id: 2,
            pergunta: 'O que é JSX?',
            resposta: 'Uma extensão de linguagem do JavaScript'
        }, {
            id: 2,
            pergunta: 'O React é...',
            resposta: 'uma biblioteca JavaScript para construção de interfaces'
        }, {
            id: 2,
            pergunta: 'Componentes devem iniciar com...',
            resposta: 'letra maiúscula'
        }, {
            id: 2,
            pergunta: 'Podemos colocar ... dentro do JSX',
            resposta: 'expressões'
        }, {
            id: 3,
            pergunta: 'O que é JSX?',
            resposta: 'Uma extensão de linguagem do JavaScript'
        }, {
            id: 3,
            pergunta: 'O React é...',
            resposta: 'uma biblioteca JavaScript para construção de interfaces'
        }, {
            id: 3,
            pergunta: 'Componentes devem iniciar com...',
            resposta: 'letra maiúscula'
        }, {
            id: 3,
            pergunta: 'Podemos colocar ... dentro do JSX',
            resposta: 'expressões'
        }, {
            id: 3,
            pergunta: 'O ReactDOM nos ajuda...',
            resposta: 'interagindo com a DOM para colocar componentes React na mesma'
        }, {
            id: 3,
            pergunta: 'Usamos o npm para...',
            resposta: 'gerenciar os pacotes necessários e suas dependências'
        }, {
            id: 3,
            pergunta: 'Usamos props para...',
            resposta: 'passar diferentes informações para componentes'
        }, {
            id: 4,
            pergunta: 'O que é JSX?',
            resposta: 'Uma extensão de linguagem do JavaScript'
        }, {
            id: 4,
            pergunta: 'O React é...',
            resposta: 'uma biblioteca JavaScript para construção de interfaces'
        }, {
            id: 4,
            pergunta: 'Componentes devem iniciar com...',
            resposta: 'letra maiúscula'
        }, {
            id: 4,
            pergunta: 'Podemos colocar ... dentro do JSX',
            resposta: 'expressões'
        }, {
            id: 4,
            pergunta: 'O ReactDOM nos ajuda...',
            resposta: 'interagindo com a DOM para colocar componentes React na mesma'
        }, {
            id: 4,
            pergunta: 'Usamos o npm para...',
            resposta: 'gerenciar os pacotes necessários e suas dependências'
        }
    ]
    embaralhar(decks);

    function embaralhar(array){
        array.sort(()=> Math.random() - 0.5);
        return array;
    }

    //UI
    return (
        <div className="decks">
            <img src={logo} alt="Logo Zap Recall" />
            <h1>ZapRecall</h1>
            <select value={deck} onChange={deck => setDeck(deck.target.value)}>
                <option value="" disabled selected>Escolha seu deck Zap!</option>
                <option value={1}>Padrão</option>
                <option value={2}>Quem é esse Pokemon</option>
                <option value={3}>Narutin</option>
                <option value={4}>Pirata que estica</option>
            </select>
            {console.log(deck)}
            {temAviso ? aviso : 
            <Link to="/zapgame" state={{ deck: deck, meta: meta.meta, decks: decks }}>
                <button>Iniciar Recall!</button>
            </Link>
            }
        </div>        
    );

}

