import '../App.css'
import * as React from 'react';
import { Container } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { createTheme } from '@mui/material';
import Me from '../assets/me.png'

const About = () => {
    const theme = createTheme({
        typography: {
          fontFamily: 'PT-Serif',
        },
    })

    return (
        <React.Fragment>
            <CssBaseline />
            <Container sx={{
                height: '100vh',
                marginTop: '100px',
            }}
            >
                <Grid container spacing={5}>
                    <Grid item xs={8} sx={{ marginTop: '50px' }}>
                        <Typography variant='h3' sx={{ fontFamily: 'PT-Serif', fontWeight: 'bold' }}>About</Typography>
                        <Typography variant='h3' sx={{ fontFamily: 'PT-Serif', marginTop: '20px' }}>HI THERE!</Typography>
                        <Typography variant='h5' sx={{ fontFamily: 'PT-Serif', marginTop: '20px', fontSize: '1.6em' }}>My name is A. A. Ngurah Bagus Ryananta Danendra, you can call me Danend. </Typography>
                        <Typography variant='h5' sx={{ fontFamily: 'PT-Serif', marginTop: '20px', fontSize: '1.6em' }}>I was born on the 13th of April 2006 in Denpasar, Bali. </Typography>
                        <Typography variant='h5' sx={{ fontFamily: 'PT-Serif', marginTop: '20px', fontSize: '1.6em' }}>Im a full - stack web developer andim currently a student at ITB Stikom Bali </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={Me} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}
export default About