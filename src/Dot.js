import fulldot from './image/fulldot.png';
import blankdot from './image/blankdot.png'

import './App.css';

function Dot(props) {
  return (
    <div className="dot" onClick={()=>{props.handlerFn(props.dotData.key)}}>
      {!props.dotData.isSelect && <img src={blankdot} alt="dot"/>}
      {props.dotData.isSelect && <img src={fulldot} alt="dot"/>}
      {/* {(props.cardData.isOpen && !props.cardData.hasBear) && <img src={blankCard} alt="card"/>} */}
    </div>
  );
}

export default Dot;