//ROUTER - REACT
import React from 'react';

//IMPORT CSS & MEDIA
import seta from '../../assets/media/setinha.png';
import './FlashCard.css';

export default function FlashCard( {pergunta, resposta, resultado} ) {

    const [chamaResposta, setChamaResposta] = React.useState(0);
    let verifica = 0;
    
    return (
        <div className="flashcard">
            {chamaResposta === 1 ?
            <>
                <h5>{resposta}</h5>    
                <div className='resposta'>
                    <button onClick={() => confereResultado('vermelho')} className='vermelho'>Não lembrei</button>
                    <button onClick={() => confereResultado('laranja')} className='laranja'>Quase não lembrei</button>
                    <button onClick={() => confereResultado('verde')} className='verde'>Zap!</button>
                </div>
            </> 
            :
            <>
                <h5>{pergunta}</h5>
                <img src={seta} alt="Seta para ver a resposta" onClick={() => setChamaResposta(1)}/>
            </>
            }
        </div>
    );

    function confereResultado (x) {
        if(verifica === 0) {
            verifica = (1);
            resultado.push(x);
            console.log(resultado);
        }
    }
}