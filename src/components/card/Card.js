//ROUTER - REACT
import React from "react";
import FlashCard from "../flashcard/FlashCard";
import './Card.css';

export default function Card( {index, pergunta, resposta, resultado, } ) {
    const [virado, setVirado] = React.useState(false);
    
    return (

        <>
            {virado ? 
            <FlashCard pergunta={pergunta} resposta={resposta} resultado={resultado} />
            :
            <button onClick={virar}>
                <p>Pergunta {index + 1}</p>
                <ion-icon name="play-outline"></ion-icon>
            </button>
            }
        </>
    );

    function virar() {
        setVirado(true)
    }

}

