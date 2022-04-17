import React from 'react';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';

const code = new URLSearchParams(window.location.search).get('code')

function App() {

  return code ? <Main code={code} /> : <Login />
}

export default App;
