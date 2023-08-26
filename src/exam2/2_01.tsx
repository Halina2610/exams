import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UsersList() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

    return (
        <main>
            <h4>User list:</h4>
            <ul>
                { users.map(user => <li>{user}</li> )}
            </ul>
        </main>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);
// Что надо вставить вместо ХХХ, чтобы код заработал?