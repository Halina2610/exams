import React, {useState} from 'react';
import '../App.css';
import {Button} from './Button';
import {Table} from './Table';

function App() {
    const minNum = 0;
    const maxNum = 5;
    const [count, setCount] = useState<number>(minNum);

    const inc = () => count < maxNum && setCount(count + 1);

    const reset = () => setCount(minNum);

    return (
        <div className="App">
            <Table count={count} maxNum={maxNum}/>
            <div className={'button-wrapper'}>
                <Button callback={inc} name={'inc'} disabled={count === maxNum}/>
                <Button callback={reset} name={'reset'} disabled={count === minNum}/>
            </div>
        </div>
    );
}

export default App;
