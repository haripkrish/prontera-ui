
import React from 'react';


import { AppBar, Box, CssBaseline, Toolbar } from '@mui/material'

import Header from './header/headerSection';
import Sidebar from './sidebar/sidebar';



const HomePage: React.FC = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* header */}
            <AppBar
                enableColorOnDark
                position='fixed'
                color='inherit'
                elevation={0}
            >
                <Toolbar>
                    <Header/>
                </Toolbar>
            
            </AppBar>
            {/* drawer */}
            <Sidebar/>      

        </Box>
    )
};

export default HomePage;
