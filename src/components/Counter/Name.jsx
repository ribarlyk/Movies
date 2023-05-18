import { useSelector, useDispatch } from "react-redux"
import { storeName } from "../../store/user";
import { useEffect, useState } from "react";

export const Name = () => {
    const { name } = useSelector(state => state.name);
    const dispatch = useDispatch()
    const [data, setData] = useState([])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NThhMWY0OTYzMGNlNTZhNmVhMTNhZmY5MWU1NmE1MiIsInN1YiI6IjY0NjBlNWMzYTY3MjU0MDEwMTA5OWM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9iLUafWr7D_hVIzX6yHla8oMAAJ6n_JK8tRgH11HJoM'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NThhMWY0OTYzMGNlNTZhNmVhMTNhZmY5MWU1NmE1MiIsInN1YiI6IjY0NjBlNWMzYTY3MjU0MDEwMTA5OWM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9iLUafWr7D_hVIzX6yHla8oMAAJ6n_JK8tRgH11HJoM&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true`, options)
            .then(response => response.json())
            .then(data => setData(data.results))
            .catch(err => console.error(err))
    }, [])
    console.log(data[0])
    return (
        <>
            <input type="text" onChange={(e) => { dispatch(storeName(e.target.value)) }} />
            <p>{data[10]?.title}</p>
            <img src={"https://image.tmdb.org/t/p/original/"+data[10]?.poster_path} alt="" />
        </>
    )
}