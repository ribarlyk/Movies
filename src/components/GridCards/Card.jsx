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
export default function ActionAreaCard({ movie }) {
    const [crew, setCrew] = useState([])

    useEffect(() => {
        async function fetchData() {
            const popular = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
            const HOST = `https://api.themoviedb.org/3/movie/${movie.id}/credits?language=en-US`
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
    console.log(crew)
    return (
        <Card sx={{ maxWidth: 300, maxHeight: 550, bgcolor: "#453e3e", color: "#8a8989" }} className='card'>
            <CardActionArea >
                <CardMedia
                    component="img"
                    image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt="poster"
                    sx={{ objectFit: "stretch" }}

                />
                <CardContent sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' ,flexDirection:"column"}}>
                    <div className="content-container">
                        <Typography gutterBottom variant="h6" component="div">
                            {movie.original_title}
                        </Typography>
                        <Typography variant="body2">
                            {movie.release_date}
                        </Typography>
                    </div>
                    <div  className="content-container">
                        <label htmlFor="" style={{ display: 'flex', alignItems: 'center' }}>
                            <StarOutlineOutlinedIcon sx={{ color: 'yellow', marginRight: '4px' }} />
                            {movie.vote_average}
                        </label>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
