import React, {useState, MouseEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ColorButton() {
    const [isColored, setIsColored] = useState<boolean>(false)
    return (
        <button
            style={{ backgroundColor: `${ isColored === true ? "red": ""}`}}
            onClick={()=>setIsColored(true)}
        >
            Меняю цвет по клику
        </button>
    )
}


ReactDOM.render(
    <ColorButton/>, document.getElementById('root')
);

// Что надо написать вместо XXX, чтобы при клике кнопка становилась красной? isColored
