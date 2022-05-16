import { useState } from "react";
import Logo from "./../../assets/img/logo.png";
import "./style.css"

export default function Menu (){

    const [visible, setVisible] = useState(true);

    if (visible){
        return (
        <div className="Menu">
            <img src={Logo} alt="zap-main"/>
            <h1>ZapRecall</h1>
            <button onClick= {() => setVisible(false)}>Start</button>
        </div>
        )
    }
    return <></>;
}