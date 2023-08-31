import React, { MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Button() {
    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(typeof e === 'object');  // Исправление: Используйте typeof e === 'object' для проверки типа события.
    };

    return <button onClick={onClickHandler}>Click</button>;
}

ReactDOM.render(
    <Button />, document.getElementById('root')
);
// Какой тип данных представляет аргумент функции-обработчика?'object'
// Что надо написать вместо ххх, что бы в консоль вывело true?
