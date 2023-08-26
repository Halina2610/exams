import ReactDOM from 'react-dom'

type ButtonProps = {
    title: string
    fontColor: string
    bgColor: string
}

const CrazyButton = (props: ButtonProps) => {

    const style = {
        color: props.fontColor, //xx
        backgroundColor: props.bgColor //yy
    }

    return <button style={style}>
        {props.title}{/*zz*/}
    </button>
}

export const App = () => {
    return <div>
        <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
        <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
    </div>
}

ReactDOM.render(<App/>,
    document.getElementById('root')
)


//Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел