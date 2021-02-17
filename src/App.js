import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import MainSidebar from './Sidebars/MainSidebar';
import FolderSidebar from './Sidebars/FolderSidebar';
import './App.css'
import MainMain from './MainPages/MainMain';
import STORE from './dummy-store';
import FolderMain from './MainPages/FolderMain';

const FOLDERS = []

class App extends Component {
  state = {
    notes:[],
    folders:[]
  };

  componentDidMount() {
    this.setState(STORE)
  }

  render() {
    const { notes, folders } = this.state;
    return (
      <div className='App'>

        <div className="sidebar">
          <Route
            exact
            path='/'
            render={() => 
            <MainSidebar
              folders={folders}
              notes={notes}
            />}
          />

          <Route
            path='/folder/:folderId'
            render={(routerProps) =>
              <FolderSidebar
                folders={folders}
                notes={notes}
                activeFolder={this.state.folders.find
                  (folder => folder.id === routerProps.match.params.folderId)}
              />
            }
          />

        </div>
        

        <main>
          <Header />
          <Route
            exact
            path='/'
            render={() => 
              <MainMain
                folders={folders}
                notes={notes}
              />}
          />
          <Route
            path='/folder/:folderId'
            render={()=>
            <FolderMain
              folders={folders}
              notes={notes}
            />}
          />
        </main>
      </div>

    );
  }
}

export default App;