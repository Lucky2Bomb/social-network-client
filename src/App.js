import React from 'react';
import './sass/style.scss';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Dialogs from './components/Dialogs/Dialogs';
import UsersContainer from './components/Users/UsersContainer';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';

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
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/dialogs" render={() => <Dialogs />} />
            <Route path="/users" render={() => <UsersContainer />} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;