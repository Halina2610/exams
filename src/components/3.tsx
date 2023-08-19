type UserPropsType = {
    name: string
    description: string
}
export const User: React.FC<UserPropsType> = (props) => {
    return <div>
        <h1>Имя: {props.name}</h1>
        //<div>Описание: {props.description}</div>
    </div>
}

//Что нужно написать вместо ххх, что бы код работал?