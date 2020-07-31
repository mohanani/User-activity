import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import UserScreen from './Screens/UserScreen';



function App() {

  return (
    <BrowserRouter>
    <div className="user">
    <header className="header">
      <div className="user-top">
      <h3>Users</h3>
      </div>
    </header>

    <main className="main">
      <div className="content">
        <Route path="/" exact={ true } component={UserScreen}/>
      </div>
    </main>

    <footer className="footer">
        All rights reserved.
    </footer>
    </div>
    </BrowserRouter> 
  );
}

export default App;
