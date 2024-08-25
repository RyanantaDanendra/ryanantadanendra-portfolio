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

const Skills = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth={false} sx={{ 
                height: '100vh',
             }}>
                <Typography variant='h3' sx={{ fontWeight: 'bold', marginLeft: '130px' }}>Skills</Typography>
                <Grid container spacing={0} sx={{ marginTop: '80px', }}>
                    <Grid item xs={5} sx={{ 
                        display: 'flex',
                        justifyContent: 'flex-end'
                     }}>
                        <Box sx={{
                            width: '310px',
                            height: '410px',
                            backgroundColor: '#003366',  
                            marginRight: '10px'       
                        }}>
                            <Typography variant='h5' sx={{ color:'white', textAlign: 'center', marginTop: '20px' }}>Language</Typography>
                            <Box sx={{ paddingX: '55px', marginTop: '20px' }}>
                                <img src={Html} alt="" className='html-logo'/>
                                <img src={Css} alt="" className='css-logo'/>
                                <img src={Php} alt="" className='php-logo'/>
                                <img src={Js} alt="" className='php-logo'/>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{
                            width: '255px',
                            height: '200px',
                            backgroundColor: '#003366',
                            paddingY: '20px',
                            paddingX: '10px'
                        }}>
                            <Typography variant='h5' sx={{ color: 'white', textAlign: 'center' }}>Collaboration Platforms</Typography>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '20px',
                                gap: '10px'
                            }}>
                                <img src={Git} alt="" className='git-logo' />
                                <img src={Github} alt="" className='github-logo' />
                            </Box>
                        </Box>
                        <Box sx={{
                            width: '255px',
                            height: '200px',
                            backgroundColor: '#003366',
                            marginTop: '8px',
                            paddingTop: '20px'
                        }}>
                            <Typography variant='h5' sx={{ color: 'white', textAlign: 'center' }}>Tools</Typography>
                            <Box sx={{ 
                                marginTop: '20px',
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '10px'
                             }}>
                                <img src={Vscode} alt="" className='vscode-logo' />
                                <img src={Wp} alt="" className='wp-logo' />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box sx={{
                            width: '310px',
                            height: '410px',
                            backgroundColor: '#003366',  
                            marginLeft: '10px',
                            paddingTop: '20px',
                            paddingX: '20px'
                        }}>
                            <Typography variant='h5' sx={{ color: 'white', textAlign: 'center' }}>Frameworks</Typography>
                            <Box sx={{ 
                                marginTop: '20px',
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: '10px',
                                marginTop: '30px'
                             }}>
                                <img src={Bootstrap} alt="Bootstrap" className='bootstrap-logo' />
                                <img src={Tailwind} alt="Tailwind" className='tailwind-logo' />
                                <img src={ReactLogo} alt="React" className='react-logo' />
                                <img src={Mui} alt="Material Ui" className='mui-logo' />
                                <img src={Laravel} alt="Laravel Ui" className='laravel-logo' />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
export default Skills