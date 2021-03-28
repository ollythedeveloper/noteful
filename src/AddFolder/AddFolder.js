import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
// import { getNewId } from '../notes-helpers';
import config from '../config';
import './AddFolder.css';

class AddFolder extends Component {
    static contextType = NotefulContext;

    state = {
        error: null,
    };

    handleSubmit = e => {
        e.preventDefault()
        //get the form field from the event
        const {name} = e.target
        // const newId = getNewId()
        const folder = {
            // id: newId,
            name: name.value,
        }
        this.setState({ error: null })
        fetch(config.FOLDER_URL, {
            method: 'POST',
            body: JSON.stringify(folder),
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => {
            if(!res.ok){
                //get the error message
                return res.json().then(error => {
                    //throw it
                    throw error
                })
            }
            return res.json()
        })
        .then(data => {
            name.value= ''
            this.context.addFolder(data)
            this.props.history.push('/')
        })
        .catch(error => {
            this.setState({error})
        })
    }

    handleClickCancel = () => {
        this.props.history.push('/')
    };
    
    render(){
        const { error } = this.state
        return (
            <section className='AddFolder'>
                <h2>Create a new folder</h2>
                <form 
                    className='AddFolder__form'
                    onSubmit={this.handleSubmit}
                >
                    <div className='AddFolder__error' role='alert'>
                        {error && <p>{error.message}</p>}
                    </div>
                    <div>
                        <label htmlFor='name'>
                            Folder name:
                            {' '}
                            <span className="requiredField">*</span>
                        </label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Name the new folder'
                            aria-required='true'
                            required
                        />
                    </div>
                    <div className='AddFolder__buttons'>
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

export default AddFolder;