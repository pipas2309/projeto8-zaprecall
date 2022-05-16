//IMPORT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

//IMPORT COMPONENTS
import BoasVindas from "./BoasVindas";
import Metas from "./Metas";
import Decks from "./Decks";
import Zapgame from "./Zapgame";

//IMPORT CSS
import "../assets/css/reset.css";
import "../assets/css/style.css";

export default function App() {

    const [atualize, setAtualize] = React.useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<BoasVindas />} />
                <Route exact path="/metas" element={<Metas />} />
                <Route exact path="/decks" element={<Decks />} />
                <Route exact path="/zapgame" element={<Zapgame />} />
            </Routes>
        </BrowserRouter>
    );
}