import { ReactComponent as Zap } from "./../../assets/img/checkmark-circle-icon.svg";
import { ReactComponent as Forgot } from "./../../assets/img/close-circle-icon.svg";
import { ReactComponent as Almost } from "./../../assets/img/help-circle-icon.svg";
import { ReactComponent as Play } from "./../../assets/img/play-outline-icon.svg";

import Happy from "./../../assets/img/party.png";
import Flip from "./../../assets/img/setinha.png";
import Sad from "./../../assets/img/sad.png";

import "./style.css";

export default function Icone (props) {
  const icons = {
    zap: <Zap fill="#2FBE34" />,
    forgot: <Forgot fill="#FF3030" />,
    almost: <Almost fill="#FF922E" />,
    play: <Play />,
    flip: <img src={Flip} alt="flip" />,
    happy: <img src={Happy} alt="happy" />,
    sad: <img src={Sad} alt="sad" />
  };

  const {icon} = props;
  const css = `Icon ${icon}`;
  return <span className={css}>{icons[icon]}</span>
}
