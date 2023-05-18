import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ movie }) {
    return (
        <Card sx={{ maxWidth: 420 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt="poster"
                    sx={{ objectFit: "contain" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {movie.original_title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {movie.release_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {movie.vote_average}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
