import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UsersList() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
    return (
        <p>Тут будет список пользователей</p>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);
// Что вернёт выражение: typeof setUsers?

