import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from 'react';
import "./Card.scss"
import getData from '../../services/fetchData';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import "./SmallerCard.scss"
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ActionAreaCardSmaller({ movie }) {
    const [crew, setCrew] = useState([])

    useEffect(() => {
        async function fetchData() {
            const popular = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NThhMWY0OTYzMGNlNTZhNmVhMTNhZmY5MWU1NmE1MiIsInN1YiI6IjY0NjBlNWMzYTY3MjU0MDEwMTA5OWM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9iLUafWr7D_hVIzX6yHla8oMAAJ6n_JK8tRgH11HJoM'
                }
            };
            const crew = await getData(popular, options)
            setCrew(crew.data)
        }
        fetchData()
    }, [])
    // console.log(crew)
    return (
        <Card sx={{ maxWidth: 200, height: 380, bgcolor: "#453e3e", color: "#8a8989" }}>
            <CardActionArea >
                <LazyLoadImage src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    width={200}
                />

                <CardContent sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: "column" }}>

                    <Typography gutterBottom component="div" >
                        {movie.title}
                    </Typography>
                    <label htmlFor="" style={{ display: 'flex', alignItems: 'center' }} className='star-rating'>
                        <StarOutlineOutlinedIcon sx={{ color: '#07b4e2', marginRight: '4px' }} />
                        {movie.vote_average}
                    </label>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}
