import React from 'react';
import './sass/style.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Header />
        <main className="main">
          <div className="nav-container">
            <Navbar />
          </div>
          <div className="content-contaner">
            <Profile />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;