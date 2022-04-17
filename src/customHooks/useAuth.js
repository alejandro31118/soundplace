import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = (code) => {
    const [accesToken, setAccesToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
      axios.post('http://localhost:3001/login', {code})
      .then(response => {
        setAccesToken(response.data.accesToken)
        setRefreshToken(response.data.refreshToken)
        setExpiresIn(response.data.expiresIn)
        console.log(response.data)

        window.history.pushState({}, null, "/")
      })
      .catch(() => {
        window.location = "/"
      })
    }, [code])

    return accesToken
  };
  
  export default useAuth;