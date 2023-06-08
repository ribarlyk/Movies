import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import "./GanreCard.scss"
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ActionAreaCardGanres({ movie }) {


    return (
        <Card sx={{ maxWidth: 300, maxHeight: 600, bgcolor: "#453e3e", color: "#8a8989" }} className='card'>
            <CardActionArea >

                <LazyLoadImage
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt="poster"
                    width={300}
                    height={400}
                />

                <CardContent sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: "column" }}>
                    <div className="content-container">
                        <Typography gutterBottom variant="h6" component="div">
                            {movie.title}
                        </Typography>
                        <Typography variant="body2">
                            {movie.release_date}
                        </Typography>
                    </div>
                    <div className="content-container">
                        <div className="wrapper-modal">
                            <label htmlFor="" style={{ display: 'flex', alignItems: 'center' }}>
                                <StarOutlineOutlinedIcon sx={{ color: '#07b4e2', marginRight: '4px' }} />
                                {movie.vote_average}
                            </label>
                        </div>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
