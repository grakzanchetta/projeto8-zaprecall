import {useState} from "react";
import LogoSmall from "./../../assets/img/logo-pequeno.png"
import "./style.css";
import Flashcard from "../Flashcard/Index"
import Icons from "../Icons/Index"

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
    const [answers, setAnswers] = useState([]);
    const flashcards = createCards();

    function createCards (){
        if (questions.length === 0){
            data.sort((a,b) => Math.random() - 0.5);
            setQuestions([...data])
            return <></>
        } else {
            return questions.map((question, index) => {
                const {front, back } = question;
                return <Flashcard 
                key={index}
                front={front}
                back={back}
                index={index + 1}
                endGame={answer => setAnswers([...answers, answer])}
                />
                
            })
        }
    }

    function createFooter(){
        let result = <></>;

        if (questions.length === answers.length && answers.length >0){
            if (!answers.includes("forgot")){
                result = (
                    <div className="result">
                        <span><Icons icon="happy"/> Parabéns!</span>
                        <p>Você não esqueceu de nenhum flashcard!</p>
                    </div>
                )
            } else {
                result = (
                    <div className="result">
                        <span><Icons icon="sad"/> Putz!</span>
                        <p>Ainda faltam alguns... Mas não desanime!</p>
                    </div>
                )
            }
        } 
        
        return (
            <>
            {result}
            <p>{answers.length}/{data.length} Concluídos!</p>
            { answers.map(answer => <Icons icon={answer} />)}
            </>
        )
    }

    const footer = createFooter();

    return (
        <div className="Game">
            <header>
                    <img src={LogoSmall} alt="zap-deck"/>
                    <h1>ZapRecall</h1>
            </header>
            <main>
            <div className="cardsContainer">
                {flashcards}
            </div>
            </main>
            <footer>
                {footer}
            </footer>
        </div>
    )
}