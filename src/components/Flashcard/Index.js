import {useState} from "react";
import Icons from  "../Icons/Index";
import "./style.css";

export default function Flashcard(props) {
    const [status, setStatus] = useState({
        stage: 1,
        result: ""
      });
    const {front, back, index, endGame} = props;
    
    const content = createContent();

    function createContent() {
    
    const {stage, result} = status;
    if(stage === 1) {
      return (
        <div 
          className="panel closed" 
          onClick={()=>setStatus({...status, stage: 2})}
        >
          <p>Flashcard {index}</p>
          <Icons icon="play" />
        </div>
      )
    }
    if(stage === 2) {
      return (
        <div className="panel open">
          <p>{front}</p>
          <div className="icon" onClick={()=>setStatus({...status, stage: 3})}>
            <Icons icon="flip" />
          </div>
        </div>
      )
    }
    if(stage === 3) {
        const buttons = [
            { text: "Não lembrei", result: "forgot" },
            { text: "Quase não lembrei", result: "almost" },
            { text: "Zap!", result: "zap"}
        ]
      return (
        <div className="panel open">
          <p>{back}</p>
          <div className="buttons">
          {
            buttons.map(({text, result}) => {
              return (
                <button 
                  key={result}
                  className={result} 
                  onClick={() => {
                    setStatus({stage: 4, result});
                    endGame(result);
                  }}
                >
                  {text}
                </button>
              )
            })
          }
          </div>
        </div>
      )
    }
    if(stage === 4) {
      return (
        <div className="panel closed end">
          <p className={result}>Flashcard {index}</p>
          <Icons icon={result} />
        </div>
      )
    }
  }
  
  return <div className="Flashcard">{content}</div>
}


