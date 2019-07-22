import React from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header'
import {HashRouter} from 'react-router-dom'
import routes from './routes'


function App() {
  return (
    <HashRouter>
    <div >
      <Header />
      <div>{routes}</div>
    </div>
    </HashRouter>
  );
}

export default App;
