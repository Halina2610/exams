import React, {useState, MouseEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function AuthForm() {
    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        alert()
    }
    return (
        <form>
            <div>
                <label style={{padding: "10px 0"}}>
                    Name:
                    <input type={"email"} name={"email"}/>
                </label>
            </div>
            <div>
                <label style={{padding: "10px 0"}}>
                    Password:
                    <input type={"password"} name={"password"}/>
                </label>
            </div>
            <button
                onClick={onClickHandler}
                type={"submit"}>
                Log in
            </button>
        </form>
    )
}

ReactDOM.render(
    <AuthForm/>, document.getElementById('root')
);
// Что надо написать вместо ххх, чтобы данные из формы
// не отправлялись на сервер и страница не перезагружалась
// при клике по кнопке?   e.preventDefault()