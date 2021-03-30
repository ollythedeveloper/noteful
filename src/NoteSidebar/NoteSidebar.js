import React, { Component } from 'react';
import CircleButton from '../CircleButton/CircleButton';
import NotefulContext from '../NotefulContext';
import { findNote, findFolder } from '../notes-helpers';
import './NoteSidebar.css';

class NoteSidebar extends Component {
    static contextType = NotefulContext;

    static defaultProps = {
        history: { 
            goBack: () => { }
        },
        match:{
            params: {}
        }
    }

    render(){
        const { folders=[], notes=[] } = this.context
        const { noteId } = this.props.match.params
        const note = findNote(notes, parseInt(noteId)) || {}
        const folder = findFolder(folders, note.folderid);
        
    return(
        <div className="NoteSidebar">
            <CircleButton 
                tag="button"
                roles='link'
                onClick={() => this.props.history.goBack()}
                className="NoteSidebar__back-button" >
                    {'<'}
                    <br/>
                    Back
                </CircleButton>
                {folder && (
                    <h3 className='NoteSidebar__folder-name'>
                        {folder.name}
                    </h3>
                )}
        </div>
    )
 }
}

export default NoteSidebar