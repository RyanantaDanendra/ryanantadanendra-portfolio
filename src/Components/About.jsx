import '../App.css'
import * as React from 'react';
import { Container } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { createTheme } from '@mui/material';
import Me from '../assets/me.png'
import Poppins from '../assets/font/Poppins-Regular.ttf'

const About = () => {
    const theme = createTheme({
        typography: {
          fontFamily: 'Poppins',
        },
    })

    return (
        <React.Fragment>
            <CssBaseline />
            
        </React.Fragment>
    )
}
export default About