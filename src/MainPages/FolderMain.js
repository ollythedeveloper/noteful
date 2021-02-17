import React from 'react';
import { Link } from 'react-router-dom';


export default function FolderMain(folders, notes) {
    return (
        <>
            <ul className="Foldermain">
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