import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { debouncer } from '../../services/debounce';
export default function CustomizedInputBase({ onInputHandler }) {
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "800px" }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Movies"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={debouncer(onInputHandler,500)}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" >
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        </Paper>
    );
}

