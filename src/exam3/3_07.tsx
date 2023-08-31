import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

type UserType = {
    id: number
    name: string
    age: number
}

type UserPropsType = UserType & {
    deleteUser: (id: number) => void
}

function User(props: UserPropsType) {
    return (
        <li>
            <button onClick={()=>props.deleteUser(props.id)}>x</button>
            User {props.name}: {props.age} y.o.
        </li>
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
    const deleteUser = (userID: number) => {
        setUsers(users.filter(u => u.id !== userID))
    }
    return (
        <main>
            <h4>Users list:</h4>
            <ul>
                {users.map(u => <User
                    key={u.id}
                    {...u}
                    deleteUser={deleteUser}
                />)}
            </ul>
        </main>
    )
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);
// В типе UserPropsType у функции deleteUser в параметрах указан тип "any".
// Какой тип было бы указать правильнее? number
