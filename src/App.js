import React from 'react';
import './sass/style.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <main className="main">
            <div className="nav-container">
              <Navbar />
            </div>
            <div className="content-contaner">
              <Route path="/profile" component={Profile} />
              <Route path="/dialogs" component={Dialogs} />
            </div>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;