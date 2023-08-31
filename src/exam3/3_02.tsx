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
    const data: Array<UserType> = [
        {id: 1, name: "Bob", age: 25},
        {id: 2, name: "Alex", age: 28},
        {id: 3, name: "Ann", age: 23},
        {id: 4, name: "John", age: 30},
    ]
    const [users, setUsers] = useState<Array<UserType>>(data)
    // Необходимо отрендерить список пользователей старше 25 лет:
    // const getOlderThen25Users = (u: xxx) => u.age > 25
    // const olderThen25Users = users.filter(getOlderThen25Users)
    return (
        <main>
            <h4>User list:</h4>
            <ul>
                {/*{ olderThen25Users.map(u => <User key={u.id} {...u}/>)}*/}
            </ul>
        </main>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);

// Что надо написать вместо xxx, чтобы код работал? UserType
function UsersList1() {
    const data: Array<UserType> = [
        {id: 1, name: "Bob", age: 25},
        {id: 2, name: "Alex", age: 28},
        {id: 3, name: "Ann", age: 23},
        {id: 4, name: "John", age: 30},
    ]
    const [users, setUsers] = useState<Array<UserType>>(data)

    const getOlderThan25Users = (user: UserType) => user.age > 25;
    const olderThan25Users = users.filter(getOlderThan25Users);

    return (
        <main>
            <h4>User list:</h4>
            <ul>
                {olderThan25Users.map(user => <User key={user.id} {...user}/>)}
            </ul>
        </main>
    )
}