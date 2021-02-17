import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import MainSidebar from './Sidebar/MainSidebar';
// import Sidebar from './Sidebar/Sidebar';
import './App.css'
import MainMain from './MainPage/MainMain';


class App extends Component {
  render() {
    return (
      <div className='App'>

        <div className="sidebar">
          <Route
            exact
            path='/'
            component={MainSidebar}
          />
          {/* <Route
            path='/'
            component={ }
          /> */}
        </div>

        <div className="main">
          <Header />
          <Route
            exact
            path='/'
            component={MainMain}
          />

        </div>
      </div>
      
    );
  }
}

export default App;