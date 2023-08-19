type PropsType = {
    city: string        // 'minsk'
    country: string     // 'belarus'
    coords?: string     // '53.917501,27.604851'
}

export const Wrapper1 = () => {
    return <PropsComponent1 city="minsk" country={'Belarus'}/>
}

export const PropsComponent1: React.FC<PropsType> = (props) => {
    return <div>hello</div>
}

// Что МИНИМАЛЬНО ДОСТАТОЧНО нужно дописать в строке 8 (cтрока с ошибкой), чтобы не было ошибки