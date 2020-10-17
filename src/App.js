import React from 'react';
import './sass/style.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import { Route, BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <main className="main">
            <div className="nav-container">
              <Navbar navbar={props.props.navbar}/>
            </div>
            <div className="content-contaner">
              <Route path="/profile" render={() => <Profile profile={props.props.profile}/>} />
              <Route path="/dialogs" render={() => <Dialogs dialogs={props.props.dialogs} />}  />
            </div>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;