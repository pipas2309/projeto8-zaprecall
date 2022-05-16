//IMPORT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

//IMPORT COMPONENTS
import BoasVindas from "./BoasVindas";
import Metas from "./Metas";
import Decks from "./Decks";
import Zapgame from "./Zapgame";

//IMPORT CSS
import "../assets/css/reset.css";
import "../assets/css/style.css";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BoasVindas />} />
                <Route path="/metas" element={<Metas />} />
                <Route path="/decks" element={<Decks />} />
                <Route path="/zapgame" element={<Zapgame />} />
            </Routes>
        </BrowserRouter>
    );
}