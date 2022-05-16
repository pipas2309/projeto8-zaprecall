//

export default function Footer( {resultado, deck, setMudou, mudou, display, setDisplay} ) {
    setDisplay(resultado.length);
    console.log(resultado.length)
    console.log(display)

    return (
        <p>{`${display}/${deck.length} CONCLUÍDOS`}</p>
    );
}