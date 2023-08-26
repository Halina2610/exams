import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UsersList() {
    const results = useState<Array<string>>(["Bob", "Alex", "Ann"])
    const users = results[0]
    const setUsers = results[1]

    return (
        <p>Тут будет список пользователей</p>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);

// Какой тип правильнее указать вместо "any" при типизации стэйта?
