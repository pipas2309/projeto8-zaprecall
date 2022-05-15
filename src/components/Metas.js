//ROUTER
import { Link } from 'react-router-dom';

//REACT
import React, { useState } from 'react';

//IMPORT CSS & MEDIA
import logo from '../assets/media/logo.png';


export default function BoasVindas () {
    const [meta, setMeta] = React.useState('');
    let temAviso = false;
    const aviso = (
        <>
            <p>A META mínima é 1(um)!</p>
            <button className='button-erro'>Iniciar Recall!</button>
        </>
    );

    if(meta < 1) {
        temAviso = true;
    } else {
        temAviso = false;
    }

    return (
        <div className="meta">
            <img src={logo} alt="Logo Zap Recall" />
            <h1>ZapRecall</h1>
            <input type="number" value={meta} onInput={input => setMeta(input.target.value)} placeholder="Digite sua meta de zaps..."/>
            {temAviso ? aviso : 
            <Link to="/starting">
                <button onClick={console.log(meta)}>Iniciar Recall!</button>
            </Link>
            }
        </div>
    );
}