import {useState} from "react";
import LogoSmall from "./../../assets/img/logo-pequeno.png"
import "./style.css";
import Flashcard from "../Flashcard/Index"

const data = [
    { front: "O que é JSX?", back: "Uma extensão de linguagem do JavaScript" },
    { front: "O React é __", back: "Uma biblioteca JavaScript para construção de interfaces" },
    { front: "Componentes devem iniciar com __", back: "Letra maiúscula" },
    { front: "Podemos colocar __ dentro do JSX", back: "Expressões" },
    { front: "O ReactDOM nos ajuda __", back: "Interagindo com a DOM para colocar componentes React na tela" },
    { front: "Usamos o npm para __", back: "Gerenciar os pacotes necessários e suas dependências" },
    { front: "Usamos o props para __", back: "Passar diferentes informações para componentes" },
    { front: "Usamos estado (state) para __", back: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
  ];

export default function Game(){

    const [questions, setQuestions] = useState([]);
    const flashcards = createCards();

    function createCards (){
        if (questions.length === 0){
            data.sort((a,b) => Math.random() - 0.5);
            setQuestions([...data])
            return <></>
        } else {
            return questions.map(question => {
                const {front, back } = question;
                return <Flashcard 
                front={front}
                back={back}
                />
            })
        }
    }

    return (
        <div className="Game">
            <header>
                <img src={LogoSmall} alt="zap-deck"/>
                <h1>ZapRecall</h1>
            </header>
            <main>
                {flashcards}
            </main>
            <footer>
                <p>0/{data.length} Concluídos!</p>
            </footer>
        </div>
    )
}