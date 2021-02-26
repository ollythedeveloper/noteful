import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import FolderSidebar from './FolderSidebar/FolderSidebar';
import NoteSidebar from './NoteSidebar/NoteSidebar';
import FolderMain from './FolderMain/FolderMain';
import NotePageMain from './NotePageMain/NotePageMain';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import NotefulContext from './NotefulContext';
import config from './config';
// import { getNotesForFolder, findNote, findFolder } from './notes-helpers';
import './App.css';

class App extends Component {
  state = {
    folders: [],
    notes: [],
  };

  handleDeleteNote = noteId => {
    const newNotes = this.state.notes.filter(note =>
      note.id !== noteId
    )
    this.setState({
      notes: newNotes
    });
  };

  handleAddFolder = folder => {
    this.setState({
      folders: [...this.state.folders, folder]
    })
  }

  handleAddNote = note => {
    this.setState({
      notes: [...this.state.notes, note]
    })
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.FOLDER_URL}`),
      fetch(`${config.NOTE_URL}`)
    ])
      .then(([foldersRes, notesRes]) => {
        if (!foldersRes.ok)
          return foldersRes.json().then(e => Promise.reject(e));
        if (!notesRes.ok)
          return notesRes.json().then(e => Promise.reject(e));

        return Promise.all([foldersRes.json(), notesRes.json()]);
      })
      .then(([folders, notes]) => {
        this.setState({ folders, notes });
      })
      .catch(error => {
        console.error({ error })
      });
  }

  renderNavRoutes() {
    const { notes, folders } = this.state;
    return (
      <>
        {['/', '/folder/:folderId', '/add-note'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={FolderSidebar}
          />
        ))}
        <Route
          path="/note/:noteId"
          component={NoteSidebar} />
        <Route path='/add-folder' component={AddFolder} />
        {/* <Route path='/add-note' component={AddNote} /> */}
      </>
    )
  }

  renderMainRoutes() {
    const { notes, folders } = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={FolderMain}
          />

        ))}
        <Route
          path='/note/:noteId'
          component={NotePageMain}
        />
        <Route
          path='/add-note'
          component={AddNote}
          />
      </>
    );
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.handleDeleteNote,
      addNote: this.handleAddNote,
      addFolder: this.handleAddFolder
    };

    return (
      <NotefulContext.Provider value={contextValue}>
        <div className='App'>
          <nav className="App_sidebar">{this.renderNavRoutes()}</nav>
          <Header />
          <main className="App__main">
            {this.renderMainRoutes()}
          </main>
        </div>
      </NotefulContext.Provider>
    );
  }
}

export default App;