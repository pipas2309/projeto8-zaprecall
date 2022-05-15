//IMPORT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

//IMPORT COMPONENTS
import BoasVindas from "./BoasVindas";
import Game from "./Game";
import Metas from "./Metas";


//IMPORT CSS
import "../assets/css/reset.css";
import "../assets/css/style.css";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BoasVindas />} />
                <Route path="/starting" element={<Metas />} />
                <Route path="/zapgame" element={<Game />} />
            </Routes>
        </BrowserRouter>
    );
}