import React from 'react';
import { Link } from 'react-router-dom';
import STORE from '../dummy-store';

export default function MainMain() {
    return (
        <>
            <ul className="Mainmain">
                {STORE.notes.map(note =>
                    <li key={note.id}>
                        <Link to={`/note/${note.id}`}>
                            {note.name}
                        </Link>
                        <p>Last modified: {note.modified}</p>
                        <button>Delete</button>
                    </li>)}
            </ul>
        </>
    )
}