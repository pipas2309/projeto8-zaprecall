//ROUTER - REACT
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from './card/Card';
import React from "react";
import Footer from "./Footer";

//IMPORT CSS & MEDIA
import logo from '../assets/media/logo.png';
import './card/Card.css';

//EXPORT
export default function Zapgame() {
    let config = useLocation().state;
    console.log(config);
    //config.deck
    //config.meta

    const decks = [
        {
            id: 1,
            cliclado: false,
            respostaVisivel: false,
            status: '',
            pergunta: 'O que é JSX?',
            resposta: 'Uma extensão de linguagem do JavaScript'
        }, {
            id: 1,
            cliclado: false,
            respostaVisivel: false,
            status: '',
            pergunta: 'O React é...',
            resposta: 'uma biblioteca JavaScript para construção de interfaces'
        }, {
            id: 1,
            cliclado: false,
            respostaVisivel: false,
            status: '',
            pergunta: 'Componentes devem iniciar com...',
            resposta: 'letra maiúscula'
        }, {
            id: 1,
            cliclado: false,
            respostaVisivel: false,
            status: '',
            pergunta: 'Podemos colocar ... dentro do JSX',
            resposta: 'expressões'
        }, {
            id: 1,
            cliclado: false,
            respostaVisivel: false,
            status: '',
            pergunta: 'O ReactDOM nos ajuda...',
            resposta: 'interagindo com a DOM para colocar componentes React na mesma'
        }, {
            id: 1,
            cliclado: false,
            respostaVisivel: false,
            status: '',
            pergunta: 'Usamos o npm para...',
            resposta: 'gerenciar os pacotes necessários e suas dependências'
        }, {
            id: 1,
            cliclado: false,
            respostaVisivel: false,
            status: '',
            pergunta: 'Usamos props para...',
            resposta: 'passar diferentes informações para componentes'
        }, {
            id: 1,
            cliclado: false,
            respostaVisivel: false,
            status: '',
            pergunta: 'Usamos estado (state) para...',
            resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
        },
    ]

    //Lógica que filtra os decks e deixa só o que você escolheu
    const deck = decks.filter(escolhido => Number(config.deck) === escolhido.id)
    let embaralhado = false;
    embaralhar(deck);

    //Lógica do limite da meta por deck
    if(config.meta > deck.length) {
        config.meta = deck.length;
        console.log(config)
    }

    //Lógica que vira a carta
    let resultado = [];

    //UI
    return (
        <div className="game">
            <header>
                <img src={logo} alt="Logo Zap Recall" />
                <h1>ZapRecall</h1>
            </header>
            <main>
                {deck.map((card, index) => <Card pergunta={card.pergunta} resposta={card.resposta} resultado={resultado} index={index} key={index}/>)}
            </main>
            <footer>
                {/* <Footer resultado={resultado} display={display} setDisplay={setDisplay} deck={deck} setMudou={setMudou} mudou={mudou}/> */}
                <p>{`${resultado.length}/${deck.length} CONCLUÍDOS`}</p>
                <Link to='/'><button>voltar</button></Link>
            </footer>
        </div>
    );

    //Função que embaralha um array - usado para embaralhar o deck selecionado
    function embaralhar(array){
        if(embaralhado) return;
        array.sort(()=> Math.random() - 0.5);
        embaralhado = true;
        return array;
    }


}

