import React, { ChangeEvent, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

type UserType = {
    id: number
    name: string
    personalData: PersonalDataType
}
type PersonalDataType = {
    gender: string
    age: number
    technologies: Array<TechnologiesType>
}
type TechnologiesType = 'HTML' | 'CSS' | 'React' | 'JS/TS' | 'Redux'

function UsersList() {

    const [users, setUsers] = useState<Array<UserType>>([
        {
            id: 1,
            name: 'Bob',
            personalData: {
                gender: 'male',
                age: 23,
                technologies: ['HTML', 'CSS', 'React', 'JS/TS', 'Redux']
            }
        },
        {
            id: 2,
            name: 'Alex',
            personalData: {
                gender: 'male',
                age: 21,
                technologies: ['HTML', 'CSS', 'React']
            }
        },
        {
            id: 3,
            name: 'Ann',
            personalData: {
                gender: 'female',
                age: 26,
                technologies: ['HTML', 'CSS', 'JS/TS']
            }
        },
        {
            id: 4,
            name: 'Helen',
            personalData: {
                gender: 'female',
                age: 31,
                technologies: ['HTML', 'CSS']
            }
        },
        {
            id: 5,
            name: 'Donald',
            personalData: {
                gender: 'male',
                age: 28,
                technologies: ['React', 'JS/TS', 'Redux']
            }
        },
    ])


    return <ul>
        {users.map(u => {
            return (
                u.personalData.technologies.length >= 5 /*u.XXX.length >= 5 */
                    ? <li key={u.id}>
                        {`User ${u.name}. ${u.personalData.age}. Ready to work.`}
                    </li>
                    : <li key={u.id}>
                        {`User ${u.name}. ${u.personalData.age}. `}
                    </li>)
        })}
    </ul>
}

ReactDOM.render(
    <UsersList/>, document.getElementById('root')
);
// Те пользователи, у которых в стэке пять и более технологий, должны в списке
// быть отмечены, как готовые к работе.
// Что надо вставить вместо XXX, чтобы код работал нормально? personalData.technologies

