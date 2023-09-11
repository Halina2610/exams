import React from 'react';

type TablePropsType = {
    count: number
    maxNum: number
}
export const Table = (props: TablePropsType) => {
    return (
        <div className={'table count'}>
            <div style={{ color: props.count === props.maxNum ? '#ab1717' : 'inherit' }}>{props.count}</div>
        </div>
    );
};

