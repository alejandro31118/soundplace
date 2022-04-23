import React, { useState, useEffect } from 'react';
import { setClientToken } from './context/authEndpoint';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return token ? <Main /> : <Login />
}

export default App;
