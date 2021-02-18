import React from 'react';
import { Link } from 'react-router-dom';
import Note from '../Note/Note'
import CircleButton from '../CircleButton/CircleButton';
import './FolderMain.css';


export default function FolderMain(props) {
    return (
        <>
            <section className="FolderMain">
            <ul>
                {props.notes.map(note =>
                    <li key={note.id}>
                        <Note
                            id={note.id}
                            name={note.name}
                            modified={note.modified}
                        />
                    </li>    
                )}
            </ul>
            <div className='FolderMain__button-container'>
                <CircleButton
                    tag={Link}
                    to='/add-note'
                    type='button'
                    className='FolderMain__add-note-button'
                    >
                        Add
                        <br/>
                        Note
                    </CircleButton>
            </div>
            </section>
        </>
    )
}

FolderMain.defaultProps = {
    notes: [],
}