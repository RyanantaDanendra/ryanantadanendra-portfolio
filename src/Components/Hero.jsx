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


const Hero = () => {
    const theme = createTheme({
        typography: {
          fontFamily: 'PT-Serif',
        },
      })
    
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="false"
                sx={{ 
                    width: '1280px',
                    height: '100vh',
                    paddingTop: '10px',
                    paddingLeft: '0px',
                    paddingRight: '0px',
                }}
            >
                <Grid container spacing={2}>
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
                    <Grid item xs={12} marginTop='300px'>
                        <Typography sx={{ fontFamily: 'PT-Serif', textAlign: 'start', }} variant='h1'>Ryananta Danendra</Typography>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}   
export default Hero