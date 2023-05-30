// import getData from "../../services/fetchData"
// import { useState, useEffect, useRef } from "react"
// import { useSelector } from "react-redux"
// import ActionAreaCardGanres from "./GanreCard"
// import "./GanreGrid.scss"

// export default function GanreGrid() {
//     const [movies, setMovies] = useState([])
//     const currentGenre = useSelector(state => state.genre)
//     const containerRef = useRef(null);
//     const [page, setPage] = useState(1)
//     console.log(currentGenre.ganre.id)
//     useEffect(() => {

//         async function fetchData() {
//             const HOST = `https://api.themoviedb.org/3/discover/movie?with_genres=${currentGenre.ganre.id}&page=${page}`
//             const options = {
//                 method: 'GET',
//                 headers: {
//                     accept: 'application/json',
//                     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NThhMWY0OTYzMGNlNTZhNmVhMTNhZmY5MWU1NmE1MiIsInN1YiI6IjY0NjBlNWMzYTY3MjU0MDEwMTA5OWM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9iLUafWr7D_hVIzX6yHla8oMAAJ6n_JK8tRgH11HJoM'
//                 }
//             };
//             const data = await getData(HOST, options)
//             setMovies(data.data.results)
//         }

//         fetchData()

//     }, [currentGenre.page])
//     console.log(movies)

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 if (entries[0].isIntersecting) {
//                     setPage(prevPage => prevPage + 1);
//                 }
//             },
//             {
//                 root: null,
//                 rootMargin: '0px',
//                 threshold: 1.0
//             }
//         );

//         if (containerRef.current) {
//             observer.observe(containerRef.current);
//         }

//         return () => {
//             if (containerRef.current) {
//                 observer.unobserve(containerRef.current);
//             }
//         };
//     }, []);

//     return (
//         <div className="ganre-container" ref={containerRef}>
//             {movies.map(movie => <ActionAreaCardGanres movie={movie} />)}
//         </div>
//     )
// }
import getData from "../../services/fetchData"
import { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import ActionAreaCardGanres from "./GanreCard"
import "./GanreGrid.scss"

export default function GanreGrid() {
    const [movies, setMovies] = useState([])
    const currentGenre = useSelector(state => state.genre.ganre)
    const containerRef = useRef(null);
    const observerRef = useRef(null);
    const [page, setPage] = useState(1)

    useEffect(() => {
        setMovies([])
    }, [currentGenre])
    useEffect(() => {
        async function fetchData() {
            const HOST = `https://api.themoviedb.org/3/discover/movie?with_genres=${currentGenre.id}&page=${page}`
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NThhMWY0OTYzMGNlNTZhNmVhMTNhZmY5MWU1NmE1MiIsInN1YiI6IjY0NjBlNWMzYTY3MjU0MDEwMTA5OWM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9iLUafWr7D_hVIzX6yHla8oMAAJ6n_JK8tRgH11HJoM'
                }
            };
            const data = await getData(HOST, options)
            setMovies(prevMovies => [...prevMovies, ...data.data.results])
        }

        fetchData()

    }, [currentGenre, page])

    useEffect(() => {
        if (containerRef.current && movies.length > 0) {
            observerRef.current = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        setPage(prevPage => prevPage + 1);
                    }
                },
                {
                    root: null,
                    rootMargin: '0px',
                    threshold: 1.0
                }
            );

            observerRef.current.observe(containerRef.current.lastElementChild);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [movies]);

    return (
        <>

            <h1 className="ganre-name">{currentGenre.name}</h1>
            <div className="ganre-container" ref={containerRef}>
                {movies.map(movie => <ActionAreaCardGanres key={movie.id} movie={movie} />)}
            </div>
        </>

    )
}
