import '../App.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material'
import  Box  from '@mui/material/Box';
import { Grid } from '@mui/material'
import { Paper } from '@mui/material'
import { Typography } from '@mui/material';
import { createTheme } from '@mui/material';
import PtSerif from '../assets/font/PTSerif-Regular.ttf';
import { useState, useEffect } from 'react';


const Hero = () => {
    const theme = createTheme({
        typography: {
          fontFamily: 'PT-Serif',
        },
    })
    
    return (
        <React.Fragment>
            <CssBaseline/>
            <Box sx={{ width: '100%', padding: 0, margin: 0, paddingTop: '100px' }}>
                <Grid container spacing={0}>
                    <Grid item xs={8}></Grid>
                    <Grid item xs={4}>
                        <Typography variant='h4'sx=
                        {{
                            fontFamily: 'PT-Serif'
                        }}>
                            Full - Stack Web Developer
                        </Typography>
                        <Typography variant='h5' textAlign='start' sx={{ fontFamily: 'PT-Serif' }}>A full - stack web developer based in Denpasar, Bali</Typography>
                    </Grid>
                    <Grid item xs={12} marginTop='350px'>
                        <Typography sx={{ fontFamily: 'PT-Serif', textAlign: 'start', }} variant='h1'>Ryananta Danendra</Typography>
                    </Grid>
                </Grid>
            </Box >
        </React.Fragment>
    )
}   
export default Hero