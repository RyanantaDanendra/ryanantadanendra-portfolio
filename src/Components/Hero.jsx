import '../App.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import  Box  from '@mui/material/Box';
import { Grid } from '@mui/material'
import { Paper } from '@mui/material'
import { Typography } from '@mui/material';
import { createTheme } from '@mui/material';
import PtSerif from '../assets/font/PTSerif-Regular.ttf';
import Poppins from '../assets/font/Poppins-Regular.ttf'
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Me from '../assets/me.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Hero = () => {
    const theme = createTheme({
        typography: {
          fontFamily: 'PT-Serif',
        },
    })
    
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth={false} sx={{
                height: '100vh',
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={4} sx={{
                        marginLeft: '150px', 
                        marginTop: '160px'
                    }}>
                        <Typography variant='h2' sx={{ fontWeight: 'bold' }}>Ryananta <br /> Danendra</Typography>
                        <Typography variant='h5' sx={{ marginTop: '10px' }}>Full - Stack Web Developer <br />
                        Building Scalable, Robust Web Applications</Typography>
                        <Button sx={{ marginTop: '20px', paddingX: '40px', paddingY: '20px', backgroundColor: '#003366', borderRadius: '30px', color: 'white', '&:hover': { color: 'black', border: 'black 2px solid'} }}>Email Me</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={Me} alt="Me" className='hero-image' />
                    </Grid>
                    <Grid item xs={2} sx={{ marginTop: '160px' }}>
                        <a href=""> 
                            <Box sx={{ 
                                width: '150px',
                                height: '150px',
                                backgroundColor: '#003366',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '20px',
                                '&:hover' : {
                                    backgroundColor: 'white',
                                    border: '2px solid black',
                                    transition: '.2s ease-out',
                                    '& .MuiSvgIcon-root': {
                                        color: 'black',
                                    },
                                }
                             }}>
                                <GitHubIcon sx={{ color: 'white', fontSize: '5rem', }}/>
                            </Box> 
                            <Box sx={{ 
                                width: '150px',
                                height: '150px',
                                backgroundColor: '#003366',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '20px',
                                marginTop: '20px',
                                '&:hover' : {
                                    backgroundColor: 'white',
                                    border: '2px solid black',
                                    transition: '.2s ease-out',
                                    '& .MuiSvgIcon-root': {
                                        color: 'black',
                                    },
                                }
                             }}>
                                <LinkedInIcon sx={{ color: 'white', fontSize: '5rem' }}/>
                            </Box> 
                        </a>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}   
export default Hero