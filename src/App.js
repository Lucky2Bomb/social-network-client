import React from 'react';
import './sass/style.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
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
            <Navbar navbar={props.state.navbar} />
          </div>
          <div className="content-contaner">
            <Route path="/profile" render={() => <Profile profile={props.state.profile} dispatch={props.dispatch} />} />
            <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.dialogs} dispatch={props.dispatch} />} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;