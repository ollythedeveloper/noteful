import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import CircleButton from '../CircleButton/CircleButton';
import NotefulContext from '../NotefulContext';
import { countNotesForFolder } from '../notes-helpers';
import './FolderSidebar.css'

class FolderSidebar extends Component {
    static contextType = NotefulContext;

    render() {
        const { folders=[], notes=[] } = this.context
        
        return (
            <div className="FolderSidebar">
                <ul className="FolderSidebar__list">
                    {folders.map(folder =>
                        <li key={folder.id}>
                            <NavLink
                                className="FolderSidebar__folder-link"
                                to={`/folder/${folder.id}`} >
                                <span className="FolderSidebar__num-notes">
                                    {countNotesForFolder(notes, folder.id)}
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
                        <br />
                        Folder
                    </CircleButton>

                </div>
            </div>
        )
    }
}
export default FolderSidebar;