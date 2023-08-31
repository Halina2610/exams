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
        <li>Student {props.name}: {props.age} y.o.</li>
    )
}

function UsersList() {
    const data: Array<UserType> = [
        {id: 1, name: "Bob", age: 34},
        {id: 2, name: "Alex", age: 29},
        {id: 3, name: "Ann", age: 25},
        {id: 4, name: "John", age: 36},
    ]
    const [users, setUsers] = useState<Array<UserType>>(data)
    return (
        <main>
            <h4>User list:</h4>
            <ul>
                { users.map(u => <User key={u.id} {...u} />) }
            </ul>
        </main>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);
// Что надо написать вместо xxx, чтобы код работал? u
