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
    console.log(config);
    //config.deck
    //config.meta
    //config.decks

    //Lógica que filtra os decks e deixa só o que você escolheu
    const deck = config.decks.filter(escolhido => Number(config.deck) === escolhido.id)


    //Lógica do limite da meta por deck
    if(config.meta > deck.length) {
        config.meta = deck.length;
        console.log(config)
    }

    //Lógica do footer
    const [footerFinalizada, setFooterFinalizada] = React.useState(0);
  

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
            <Footer resultado={resultado} deck={deck} setFooterFinalizada={setFooterFinalizada} footerFinalizada={footerFinalizada} />
        </div>
    );




}

//
function Footer( {resultado, deck, setFooterFinalizada} ) {
    let finalizou = true;
    if(resultado.length === deck.length) {
        finalizou = true;
    }

    const emoji = {
        vermelho: <ion-icon name="close-circle"></ion-icon>, 
        laranja: <ion-icon name="help-circle"></ion-icon>, 
        verde: <ion-icon name="checkmark-circle"></ion-icon>}

    return (
        <footer>
            <p>{`${resultado.length}/${deck.length} CONCLUÍDOS`}</p>
            {resultado.map(function(resposta) {
                if(resposta === 'vermelho') {
                    return emoji.vermelho;
                } else if(resposta === 'laranja') {
                    return emoji.laranja;
                } else if(resposta === 'verde') {
                    return emoji.verde;
                } 
            })}
            {() => setFooterFinalizada(finalizou)}
        </footer>

    );  
}