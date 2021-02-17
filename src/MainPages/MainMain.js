import React from 'react';
import { Link } from 'react-router-dom';
import STORE from '../dummy-store';

export default function MainMain(folders, notes) {
    return (
        <>
            <ul className="Mainmain">
                {folders.notes.map(note =>
                    <li key={note.id}>
                        <Link to={`/note/${note.id}`}>
                            {note.name}
                        </Link>
                        <p>Date modified: {note.modified}</p>
                        <button>Delete</button>
                    </li>)}
            </ul>
        </>
    )
}