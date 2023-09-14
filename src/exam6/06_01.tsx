import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function PasswordChecker() {
    const [password, setPassword] = useState<string>("")
    return (
        <main>
            <p>Your password must have more than 8 charters!</p>
            <input
                placeholder={"Enter your password"}
                value={password}
                onChange={e => setPassword(e.currentTarget.value)}
                type={"password"}
            />
            { password.length < 9 && <p style={{color: "red"}}>The password is too short!</p>}  {/*{XXX < 9 && <p style={{color: "red"}}>The password is too short!</p>}*/}
        </main>
    )
}

ReactDOM.render(
    <PasswordChecker/>, document.getElementById('root')
);

// Что надо вставить вместо XXX, чтобы код работал нормально? //password.length
