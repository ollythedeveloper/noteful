import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import CircleButton from '../CircleButton/CircleButton';
import { countNotesForFolder } from '../notes-helpers';
import './FolderSidebar.css'

export default function FolderSidebar(props) {
    return (
        <>
            <div className="FolderSidebar">
            <ul className="FolderSidebar__list">
                {props.folders.map(folder =>
                    <li key={folder.id}>
                        <NavLink
                            className="FolderSidebar__folder-link" 
                            to={`/folder/${folder.id}`} >
                            <span className="FolderSidebar__num-notes">
                                {countNotesForFolder(props.notes, folder.id)}
                            </span>
                            {folder.name}
                        </NavLink>
                    </li>
                )}
            </ul>
            <div className="FolderSidebar__button-wrapper">
                <CircleButton
                    tag={Link}
                    to='/add-folder'
                    type='button'
                    className="FolderSidebar__add-folder-button"
                    >
                        Add
                        <br/>
                        Folder
                    </CircleButton>

            </div>
            </div>
        </>
    )
}

FolderSidebar.defaultProps = {
    folders: []
}