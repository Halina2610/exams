import React, {useState, MouseEvent, ChangeEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function User() {
    const [userName, setUserName] = useState<string>("")
    const [text, setText] = useState<string>("")
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement> )=> setUserName(e.currentTarget.value)
    return (
        <div>
            <input
                value={userName}
                onChange={onChangeHandler}
                onBlur={()=> {
                    setUserName('')
                    setText(userName)
                }}
            />
            <p>{text}</p>
        </div>
    )
}

ReactDOM.render(
    <User/>, document.getElementById('root')
);
// Что надо написать вместо ххх,
// чтобы после вывода текста в параграф содержимое формы ввода очищалось?
