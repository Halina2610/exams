import React, { ChangeEvent, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function LongCommentChecker() {
    const minSizeComment = 5
    const [isCommentReady, setIsCommentReady] = useState<boolean>(false)
    const [comment, setComment] = useState<string>('')

    const onClickSendComment = () => {
        if (comment.length > minSizeComment) {
            setComment('')
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newComment = e.currentTarget.value
        if (newComment.length > minSizeComment) {
            setIsCommentReady(true)
        } else {
            setIsCommentReady(false)
        }
        setComment(newComment)
    }

    return (
        <main>
            <textarea
                placeholder={'Your comment must have more than 5 charters'}
                value={comment}
                onChange={onChangeHandler}
            />
            <div>
                <button
                    disabled={!isCommentReady} /*disabled={XXX}*/
                    onClick={onClickSendComment}>
                    Send comment
                </button>
            </div>
        </main>
    )
}

ReactDOM.render(<LongCommentChecker/>, document.getElementById('root'));

// Что нужно написать вместо XXX, чтобы кнопка отправки комментария отрабатывала верно:
// первоначально кнопка должна быть в состоянии disable, а после успешного выполнения условия
// (комментарий должен быть больше 5 символов) должна раздизаблиться.
// ❗ Ответ необходимо дать на основании данных (переменных), которые уже есть в коде !isCommentReady