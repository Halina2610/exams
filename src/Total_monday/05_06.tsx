import React, {useState, MouseEvent, ChangeEvent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Notes() {
    const [newNote, setNewNote] = useState<string>("")
    const [notes, setNotes] = useState<Array<string>>([])
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
        setNewNote(e.currentTarget.value)
    const addNote = () => {
        setNotes([newNote, ...notes])
        setNewNote("")
    }
    return (
        <div>
            <textarea
                value={newNote}
                onChange={onChangeHandler}
                onBlur={addNote}
            />
            <div>
                <button
                    onClick={() => setNotes([])} //onClick={xxx}
                >Clear notes list</button>
            </div>
            <h4>Notes:</h4>
            <div>
                {notes.map(n => <p>{n}</p>)}
            </div>
        </div>
    )
}

ReactDOM.render(
    <Notes/>, document.getElementById('root')
);
// Что надо написать вместо ххх,
// чтобы при клике список заметок очищался? () => setNotes([])









