import React, {useState, MouseEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Post() {
    const onClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        alert("Летим-бомбим!!!")
    }
    return (
        <div>
            <article>
                <h4>Как дела, братан?</h4>
                <p>
                    Вижу, что неплохо. Давай, трудись )))
                    Google ждёт тебя в цифровом рабстве!
                    Cтавь лайк и полетели!!!
                </p>
                <a href={"https://www.youtube.com/"}
                   onClick={onClickHandler}
                >В этом месте подробнее...</a>
            </article>
        </div>
    )
}

ReactDOM.render(
    <Post/>, document.getElementById('root')
);
// Что надо написать вместо ххх, чтобы Вас не направило на страницу Youtube
// при клике по ссылке? e.preventDefault()
