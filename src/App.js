import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import FolderSidebar from './Sidebars/FolderSidebar';
import NoteSidebar from './Sidebars/NoteSidebar';
import './App.css'
import STORE from './dummy-store';
import FolderMain from './MainPages/FolderMain';
import NotePageMain from './MainPages/NotePageMain';
import {getNotesForFolder, findNote, findFolder} from './notes-helpers';

class App extends Component {
  state = {
    notes:[],
    folders:[]
  };

  componentDidMount() {
    this.setState(STORE)
  }

  renderNavRoutes() {
    const {notes, folders} = this.state;
    return(
      <>
        {['/','/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => (
              <FolderSidebar
                folders={folders}
                notes={notes}
                {...routeProps}
              />
            )}
          />
        ))}
        <Route 
          path="/note/:noteId"
          render={routeProps =>{
            const {noteId} = routeProps.match.params;
            const note = findNote(notes, noteId) || {};
            const folder = findFolder(folders, note.folderId);
            return <NoteSidebar {...routeProps} folder={folder} />
            }}
        />
        <Route path='/add-folder' component={NoteSidebar} />
        <Route path='/add-note' component={NoteSidebar} />
      </>
    )
  }

  renderMainRoutes() {
    const {notes, folders} = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route 
            exact
            key={path}
            path={path}
            render={routeProps => {
              const {folderId} = routeProps.match.params;
              const notesForFolder = getNotesForFolder(
                notes,
                folderId
              );
              return (
                <FolderMain
                  {...routeProps}
                  notes={notesForFolder}
                />
              );
            }}
          />

        ))}
        <Route
          path='/note/:noteId'
          render={routeProps => {
            const {noteId} = routeProps.match.params;
            const note = findNote(notes, noteId);
            return <NotePageMain {...routeProps} note={note} />;
          }}
        />
      </>
    );
  }

  render() {
    const { notes, folders } = this.state;
    return (
      <div className='App'>
        <nav className="App_sidebar">{this.renderNavRoutes()}</nav>
        <Header />
        <main className="App__main">
          {this.renderMainRoutes()}
        </main>
      </div>

    );
  }
}

export default App;