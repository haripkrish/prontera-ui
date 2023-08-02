import React from 'react';


import { styled, useTheme } from '@mui/material/styles'
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material'

import { drawerWidth } from '../store/constant'
import Header from './header/headerPage';
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
