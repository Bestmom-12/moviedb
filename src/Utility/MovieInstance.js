import axios from 'axios'

const movieInstance = axios.create({
    baseURL :"https://api.themoviedb.org/3"
})

export {movieInstance}

// https://api.themoviedb.org/3/discover/movie?api_key=803a0950d7e41dbcdf0425e3805a5720&with_genres=99