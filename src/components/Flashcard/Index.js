import {useState} from "react";

import "./style.css"

export default function Flashcard (props){
    
    const {front, back, index} = props;

    const [stage, setStage] = useState(1);

    if (stage === 1){
        return <p onClick={() => setStage(2)}>Pergunta {index}</p>
    }
    if (stage === 2){
        return <p onClick={() => setStage(3)}>{front}</p>
    }
    if (stage === 3){
        return <p onClick={() => setStage(4)}>{back}</p>
    }
    if (stage === 4){
        return <p>Fim do Card</p>
    }
}