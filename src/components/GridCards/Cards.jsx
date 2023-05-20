import * as React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { useState, useEffect, useRef } from 'react';
import getData from '../../services/fetchData';
import ActionAreaCard from './Card';
import ActionAreaCardSmaller from './SmallerCard';
import CircularProgress from '@mui/material/CircularProgress';
import "./Cards.scss"


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
    const [movies, setMovies] = useState([]);
    const [moviesInCinema, setMoviesInCinema] = useState([]);
    const [moviesPopular, setMoviesPopular] = useState([]);
    const [moviesTopRated, setMoviesTopRated] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const HOST = `https://api.themoviedb.org/3/discover/movie`;
            const url = `${HOST}?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NThhMWY0OTYzMGNlNTZhNmVhMTNhZmY5MWU1NmE1MiIsInN1YiI6IjY0NjBlNWMzYTY3MjU0MDEwMTA5OWM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9iLUafWr7D_hVIzX6yHla8oMAAJ6n_JK8tRgH11HJoM'
                }
            };

            const response = await getData(url, options);
            setMovies(prevMovies => [...prevMovies, ...response.data.results]);
            setIsLoading(false);
        };

        fetchData();
    }, [page]);
    useEffect(() => {
        const fetchData = async () => {



            const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NThhMWY0OTYzMGNlNTZhNmVhMTNhZmY5MWU1NmE1MiIsInN1YiI6IjY0NjBlNWMzYTY3MjU0MDEwMTA5OWM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9iLUafWr7D_hVIzX6yHla8oMAAJ6n_JK8tRgH11HJoM'
                }
            };

            const response = await getData(url, options);
            setMoviesInCinema(prevMovies => [...prevMovies, ...response.data.results]);

            const urlTwo = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
            const optionsTwo = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NThhMWY0OTYzMGNlNTZhNmVhMTNhZmY5MWU1NmE1MiIsInN1YiI6IjY0NjBlNWMzYTY3MjU0MDEwMTA5OWM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9iLUafWr7D_hVIzX6yHla8oMAAJ6n_JK8tRgH11HJoM'
                }
            };

            const responseTwo = await getData(urlTwo, optionsTwo);
            setMoviesPopular(prevMovies => [...prevMovies, ...responseTwo.data.results]);


            const urlThree = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
            const optionsThree = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NThhMWY0OTYzMGNlNTZhNmVhMTNhZmY5MWU1NmE1MiIsInN1YiI6IjY0NjBlNWMzYTY3MjU0MDEwMTA5OWM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9iLUafWr7D_hVIzX6yHla8oMAAJ6n_JK8tRgH11HJoM'
                }
            };

            const responseThree = await getData(urlThree, optionsThree);
            setMoviesTopRated(prevMovies => [...prevMovies, ...responseThree.data.results]);



        };

        fetchData();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
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

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    console.log(movies);

    return (
        <div className='grid-container'>
            <Box sx={{ flexGrow: 1, width: `calc(100% - 450px)`, ml: `400px`, mt: `70px`, overflowX: 'auto', padding: '16px' }}>
                <h1>In Cinemas</h1>
                <div style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto' }}>
                    {moviesInCinema.map((movie, index) => (
                        <div key={movie.id} style={{ flex: '0 0 auto', marginRight: '8px', padding: '10px' }}>
                            <ActionAreaCardSmaller movie={movie} />
                        </div>
                    ))}
                </div>
            </Box>
            <Box sx={{ flexGrow: 1, width: `calc(100% - 450px)`, ml: `400px`, mt: `70px`, overflowX: 'auto', padding: '16px' }}>
                <h1>Top Rated</h1>
                <div style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto' }}>
                    {moviesTopRated.map((movie, index) => (
                        <div key={movie.id} style={{ flex: '0 0 auto', marginRight: '8px', padding: '10px' }}>
                            <ActionAreaCardSmaller movie={movie} />
                        </div>
                    ))}
                </div>
            </Box>
            <Box sx={{ flexGrow: 1, width: `calc(100% - 450px)`, ml: `400px`, mt: `70px`, overflowX: 'auto', padding: '16px' }}>
                <h1>Trending</h1>
                <div style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto' }}>
                    {moviesPopular.map((movie, index) => (
                        <div key={movie.id} style={{ flex: '0 0 auto', marginRight: '8px', padding: '10px' }}>
                            <ActionAreaCardSmaller movie={movie} />
                        </div>
                    ))}
                </div>
            </Box>

            <Box sx={{ flexGrow: 1, width: `calc(100% - 450px)`, ml: `400px`, mt: `70px` }}>
                <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 4, sm: 8, md: 20 }}>
                    {movies.map((movie, index) => (
                        <Grid xs={4} sm={4} md={4} key={movie.id}>
                            <ActionAreaCard movie={movie} />
                        </Grid>
                    ))}

                </Grid>
                <div ref={containerRef} />
                {isLoading && (
                    <div className="loader-container">
                        <CircularProgress className="loader" />
                    </div>
                )}
            </Box>
        </div>
    );
}
