require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/login', (request, response) => {
    const code = request.body.code

    const spotifyApi = new SpotifyWebApi({
        /*redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET*/
        
        redirectUri: 'http://localhost:3000',
        clientId: '7177e5435b044c0aa4583f57794ec6a7',
        clientSecret: 'eed41c0152b047be971229b68a1c5827'
    })

    spotifyApi.authorizationCodeGrant(code)
    .then(data => {
        response.json({
            accesToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    })
    .catch(() => {
        response.sendStatus(400)
    })
})