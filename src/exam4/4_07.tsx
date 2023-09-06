import React, {useState, MouseEvent, ChangeEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function User() {
    const [userName, setUserName] = useState<string>("")
    return (
        <div>
            <p>{userName}</p>
            <input
                value={userName}
                onChange={(e) => setUserName(e.currentTarget.value)}
            />
        </div>
    )
}

ReactDOM.render(
    <User/>, document.getElementById('root')
);
// Что надо написать вместо ххх, чтобы инпут был контролируемым? userName неверно
