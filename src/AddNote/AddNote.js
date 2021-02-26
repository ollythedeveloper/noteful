import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import { getNewId } from '../notes-helpers';
import config from '../config';

class AddNote extends Component {
    static contextType = NotefulContext;

    state = {
        error: null,
    }

    handleSubmit = e => {
        e.preventDefault()
        const { name, folder, content } = e.target
        const newId = getNewId()
        const note = {
            id: newId,
            name: name.value,
            modified: 'Today',
            folderId: folder.value,
            content: content.value
        }
        this.setState({error: null})
        fetch(config.NOTE_URL, {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => {
            if(!res.ok){
                //get error message
                return res.json().then(error => {
                    //throw it
                    throw error
                })
            }
            return res.json()
        })
        .then(data => {
            name.value = ''
            content.value= ''
            this.context.addNote(data)
            this.props.history.push('/')
        })
        .catch(error => {
            this.setState({error})
        })
    }

    handleClickCancel = () => {
        this.props.history.push('/')
    };

    render() {
        const folders = this.context.folders

        const foldOpts = folders.map(
            (folder, i) => <option value={folder.id} key={i}>{folder.name}</option>
        );

        const { error } = this.state
        return (
            <section className='AddNote'>
                <h2>Create a New Note</h2>
                <form
                    className='AddNote__form'
                    onSubmit={this.handleSubmit}
                >
                    <div className='AddNote__error' role='alert'>
                        {error && <p>{error.message}</p>}
                    </div>
                    <div>
                        <label htmlFor='name'>
                            Name *
                         {' '}
                        </label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Name of note'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='content'>
                            Content *
                         {' '}
                        </label>
                        <textarea
                            name='content'
                            id='content'
                        />
                    </div>
                    <div>
                        <label htmlFor='folder'>Select a folder:</label>
                        {' '}
                        <select
                            id='folder'
                            name='folder'
                            // onChange={e => this.changeSelection(e.target.value)}
                            required>
                            <option value='None'>Select one...</option>
                            {foldOpts}
                        </select>  
                    </div>
                    <div className='AddNote__buttons'>
                        <button type='button' onClick={this.handleClickCancel}>
                            Cancel
                        </button>
                        {' '}
                        <button type='submit'>
                            Save
                        </button>
                    </div>

                </form>
            </section>
        )
    }

}

export default AddNote;