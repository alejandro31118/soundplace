import axios from "axios"

export const formatMS = (ms) => {
    let minutes = Math.floor(ms/60000)
    let seconds = ((ms % 60000) / 1000).toFixed(0)

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

export const addTrackToPlaylist = (playlistId, trackUri, token) => {
    axios.post(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, data: {
            'uris': [
                trackUri
            ],
            'position': 0
        }
    })
}