import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';
import './Note.css';

export default class Note extends React.Component {
    // static defaultProps = {
    //     onDeleteNote: () => { }
    // }

    static contextType = NotefulContext;

    handleClickDelete = e => {
        e.preventDefault()
        const noteId = this.props.id

        fetch(`${config.NOTE_URL}/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(() => {
                this.context.deleteNote(noteId)
                //allow parent to perform extra behavior
                this.props.onDeleteNote(noteId)
            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        const { name, id, modified } = this.props

        return (
            <div className='Note'>
                <h2 className='Note__title'>
                    <Link to={`/note/${id}`}>
                        {name}
                    </Link>
                </h2>
                <button
                    className='Note__delete' type='button'
                    onClick={this.handleClickDelete}>
                    {' '}
                Delete
            </button>
                <div className='Note__dates'>
                    <div className='Note__dates-modified'>
                        Modified:
                    {' '}
                        <span className='Date'>
                            {modified}
                        </span>
                    </div>
                </div>
            </div>

        )
    }
}

Note.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    modified: PropTypes.string,
    onDeleteNote: PropTypes.func
}

Note.defaultProps = {
    onDeleteNote: () => {}
}