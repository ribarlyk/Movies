import * as React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CustomizedInputBase from '../SearchBar/SearchBar';
import getData from '../../services/fetchData';
import { useState, useEffect } from 'react';
import MovieCreationTwoToneIcon from '@mui/icons-material/MovieCreationTwoTone';
import { useDispatch, useSelector } from 'react-redux';
import { ganreSetter } from '../../store/genreSlice';
import "./Drawer.scss"
import { Link } from 'react-router-dom';
const drawerWidth = 280;

export default function PermanentDrawerLeft() {
    const [genres, setGenres] = useState([])
    const currentGenre = useSelector(state => state.ganre)
    const dispatch = useDispatch()



    useEffect(() => {

        const HOST = 'https://api.themoviedb.org/3/genre/movie/list?language=en'
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NThhMWY0OTYzMGNlNTZhNmVhMTNhZmY5MWU1NmE1MiIsInN1YiI6IjY0NjBlNWMzYTY3MjU0MDEwMTA5OWM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9iLUafWr7D_hVIzX6yHla8oMAAJ6n_JK8tRgH11HJoM'
            }
        };

        async function fetchData() {
            const moviesData = await getData(HOST, options)
            setGenres(moviesData.data.genres)
        }
        fetchData()
    }, [])

    const onGanreHandler = () => {
    }

    console.log(genres, currentGenre)

    return (

        <Box sx={{
            display: 'flex', bgcolor: "black",
            color: "gray", border: 'none'
        }}>
            <AppBar
                className='container-drawer'
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, display: 'flex', alignItems: 'center', bgcolor: 'black' }}
            >
                <CustomizedInputBase className="customized-input" />
            </AppBar>

            <Drawer
                className='container-drawer'

                sx={{

                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    }, border: 'none'
                }}
                variant="permanent"
                anchor="left"
            >

                <Link to={"/"} className='home-link'><img className="logo" src='src/assets/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' alt='logo'
                ></img></Link>
                <Toolbar />


                <List sx={{
                    bgcolor: "black",
                    color: "gray", border: 'none'
                }}>

                    {genres.map((text, index) => (
                        <ListItem key={text.id} disablePadding className='ganre-btn' onClick={() => { dispatch(ganreSetter(text)) }} >
                            <Link to={`/ganres-${(text.name).toLowerCase()}`} className='ganre-btn-link'>
                                <ListItemButton onClick={onGanreHandler}>
                                    <ListItemIcon>
                                        <div style={{ color: 'gray' }}>
                                            <MovieCreationTwoToneIcon />
                                        </div>
                                    </ListItemIcon>
                                    <ListItemText primary={text.name} />
                                </ListItemButton>
                            </Link>
                        </ListItem>

                    ))}
                </List>
                <Divider />

            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, border: 'none' }}
            >
                <Toolbar />

            </Box>
        </Box >
    );
}
