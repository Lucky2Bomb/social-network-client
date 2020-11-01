import React from 'react';
import './sass/style.scss';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="app">
      <div className="app-container">
        <Header />
        <main className="main">
          <div className="nav-container">
            <NavbarContainer store={props.store} />
          </div>
          <div className="content-contaner">
            <Route path="/profile" render={() => <Profile/>} />
            <Route path="/dialogs" render={() => <Dialogs/>} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;