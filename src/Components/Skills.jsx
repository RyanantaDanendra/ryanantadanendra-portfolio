import '../App.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material'
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import Html from '../assets/Logo/html.png';
import Css from '../assets/Logo/css.png';
import Php from '../assets/Logo/php.png';
import Js from '../assets/Logo/js.png';
import Git from '../assets/Logo/git.png';
import Github from '../assets/Logo/github.png';
import Vscode from '../assets/Logo/vscode.png';
import Wp from '../assets/Logo/wordpress1.png';
import Bootstrap from '../assets/Logo/bootstrap.png';
import Tailwind from '../assets/Logo/tailwind.png';
import ReactLogo from '../assets/Logo/react.png';
import Mui from '../assets/Logo/mui.png';
import Laravel from '../assets/Logo/laravel.png';

const languagesData = () => {
    const languageImages = [
        Html, Css, Js, Php
    ];

    return languageImages.map((image, index) => {
        return (
            <Box key={index} sx={{ width: '150px'}}>
                <img src={image} alt="" className='skills-image' style={{ objectFit: 'contain', width: '200px', height: '200px' }}/>
            </Box>
        );
    })
}

const frameworksData = () => {
    const frameworkImages = [
        Bootstrap, Tailwind, Laravel, Mui
    ];

    return frameworkImages.map((image, index) => {
        return (
            <Box key={index} sx={{ width: '150px'}}>
                <img src={image} alt="" className='skills-image' style={{ objectFit: 'contain', width: '200px', height: '200px' }}/>
            </Box>
        )
    })
}

const Skills = () => {


    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth={false} sx={{ 
                height: '100%',
                marginTop: '50px' 
             }}>
                <Typography variant='h3' sx={{ fontWeight: 'bold', marginLeft: '130px' }}>Skills</Typography>
                <Grid container spacing={0} sx={{ marginTop: '80px', paddingX: '30px' }}>
                    <Typography variant='h4'>Languages</Typography>
                    <Grid item xs={12} sx={{ display: 'flex', gap: '10rem', justifyContent: 'center', marginTop: '50px' }}>
                        {languagesData()}
                    </Grid>
                    <Typography variant='h4' sx={{ marginTop: '8rem' }}>Frameworks & Library</Typography>
                    <Grid item xs={12} sx={{ display: 'flex', gap: '10rem', justifyContent: 'center', marginTop: '50px' }}>
                        {frameworksData()}
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
export default Skills