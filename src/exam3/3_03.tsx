import React, {useState, MouseEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Button() {
    const [tagName, setTagName] = useState<string>()
    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        setTagName(e.currentTarget.tagName)
    }
    return (
        <>
            <p>{tagName}</p>
            <button onClick={onClickHandler} >
                <span>Click</span>
            </button>
        </>
    )
}

ReactDOM.render(
    <Button/>, document.getElementById('root')
);

// Что надо написать вместо ххх, что бы на странице появился текст BUTTON? currentTarget
