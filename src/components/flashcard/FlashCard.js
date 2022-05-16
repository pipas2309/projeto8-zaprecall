//ROUTER - REACT

//IMPORT CSS & MEDIA
import seta from '../../assets/media/setinha.png';
import './FlashCard.css';

export default function FlashCard( {pergunta, resposta} ) {
    return (
        <div className="flashcard">
            <h5>{pergunta}</h5>
            <img src={seta} alt="Seta para ver a resposta" />
        </div>
    );
}