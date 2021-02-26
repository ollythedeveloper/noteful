import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Note from '../Note/Note'
import CircleButton from '../CircleButton/CircleButton';
import './FolderMain.css';
import NotefulContext from '../NotefulContext';
import { getNotesForFolder } from '../notes-helpers';


class FolderMain extends Component {
    static defaultProps = {
        match: {
            params:{}
        }
    }

    static contextType = NotefulContext;
    
    render(){
        const notes = this.context.notes
        const { folderId } = this.props.match.params
        const notesForFolder = getNotesForFolder(notes, folderId)


    return (
            <section className="FolderMain">
            <ul>
                {notesForFolder.map(note =>
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
    )
 }
}

export default FolderMain