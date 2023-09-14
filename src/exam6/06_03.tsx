import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UsersList() {
    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
    const getUser = (user: string, i: number) => <li key={i}>{user}</li>

    const usersList = (  users.length === 0) /*const usersList = (XXX === 0)*/
        ? <p>List is empty</p>
        :  <ul>
            { users.map(getUser)}
        </ul>

    return (
        <main>
            <button onClick={()=>setUsers([])}>Clear list</button>
            <h4>User list:</h4>
            {usersList}
        </main>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);
// Что надо вставить вместо XXX, чтобы код корректно работал  со списком пользователей? users.length
