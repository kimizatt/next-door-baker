import React from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header'
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import {Provider} from 'react-redux'
import store from './redux/store'


function App() {
  return (
    <HashRouter>
    <Provider store={store}>
    <div >
      <Header />
      <div>{routes}</div>
    </div>
    </Provider>
    </HashRouter>
  );
}

export default App;
