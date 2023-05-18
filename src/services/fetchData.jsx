import axios from 'axios';
const HOST = `https://api.themoviedb.org/3/discover/movie?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NThhMWY0OTYzMGNlNTZhNmVhMTNhZmY5MWU1NmE1MiIsInN1YiI6IjY0NjBlNWMzYTY3MjU0MDEwMTA5OWM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9iLUafWr7D_hVIzX6yHla8oMAAJ6n_JK8tRgH11HJoM&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true`

export default async function getData(url, options) {
    try {
        const response = await axios.get(url, options)
        return response;
    } catch (error) {
        console.error(error)
    }

}
