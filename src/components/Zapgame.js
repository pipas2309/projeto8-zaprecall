//ROUTER - REACT
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from './card/Card';
import React from "react";

//IMPORT CSS & MEDIA
import logo from '../assets/media/logo.png';
import './card/Card.css';

//EXPORT
export default function Zapgame() {
    let config = useLocation().state;
    console.log(config)
    //config.deck
    //config.meta

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
    ]

    //Lógica que filtra os decks e deixa só o que você escolheu
    const deck = decks.filter(escolhido => Number(config.deck) === escolhido.id)
    embaralhar(deck)

    //Lógica que vira a carta
    const [clica, setClica] = React.useState(false);

    //UI
    return (
        <div className="game">
            <header>
                <img src={logo} alt="Logo Zap Recall" />
                <h1>ZapRecall</h1>
            </header>
            <main>
                {deck.map((card, index) => <Card pergunta={card.pergunta} resposta={card.resposta} clica={clica} setClica={setClica} index={index} key={index}/>)}
            </main>
            <footer>
                <p>{`Seu deck é o ${config.deck}º`}</p>
                <p>{`Sua meta é: ${config.meta}`}</p>
            </footer>
        </div>
    );


}

//Função que embaralha um array - usado para embaralhar o deck selecionado
function embaralhar(array){
    array.sort(()=> Math.random() - 0.5);
    return array;
}
