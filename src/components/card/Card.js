//ROUTER - REACT
import { useLocation } from "react-router-dom";
import React from "react";
import FlashCard from "../flashcard/FlashCard";
import './Card.css';

export default function Card( {index, pergunta, resposta, clica, setClica} ) {

    const [contador, setContador] = React.useState(0);
    const [virado, setVirado] = React.useState(false);
    


    return (

        <>
            {virado ? 
            <FlashCard pergunta={pergunta} resposta={resposta} virado={virado} setVirado={setVirado} />
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

