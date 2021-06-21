import axios from 'axios'

const instance = axios.create({
    // baseURL = "http://localhost:8000"
    baseURL: "https://joey-mern-tiktok-backend.herokuapp.com/"
})

export default instance