import { useLocation } from "react-router-dom";

export default function Zapgame(props) {
    let config = useLocation().state;
    console.log(config)
    return (
        <div>
            <p>{config.deck}</p>
        </div>
    );
}