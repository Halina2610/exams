import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

type UserType = {
    id: number
    name: string
    age: number
}

function User(props: UserType) {
    return (
        <li>User {props.name}: {props.age} y.o.</li>
    )
}

function UsersList() {
    const state = [
        {id: 1, name: "Bob", age: 34},
        {id: 2, name: "Alex", age: 25},
        {id: 3, name: "Ann", age: 30},
        {id: 4, name: "John", age: 23},
    ]
    const users = [
        {id: 1, userName: "Bob", age: 34},
        {id: 2, userName: "Alex", age: 25},
        {id: 3, userName: "Ann", age: 30},
        {id: 4, userName: "John", age: 23},
    ]
    const [usersList, setUsersList] = useState<Array<UserType>>(state);
    return (
        <main>
            <h5>User list:</h5>
            <ul>
                {usersList.map(user => (
                    <User key={user.id} id={user.id} name={user.name} age={user.age}/>
                ))}
            </ul>
        </main>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);
// Что надо написать вместо XXX, чтобы код работал?
// ❗ Если мы отмапим массив, то должны увидеть данные пользователей
// ❗ Ответ дать минимально возможным объёмом кода

