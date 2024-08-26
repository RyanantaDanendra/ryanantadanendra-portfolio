import * as React from 'react';
import { useState } from 'react';
import '../App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import Kicks from '../assets/Logo/kicks.png';
import KicksVideo from '../assets/Logo/kicks.mp4';

const RenderProjects = ({project}) => {
    const [isHovered, setIsHovered] = useState(false);

        return (
            <Grid item xs={6} sx={{ 
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px'
            }} >
            <Box sx={{ 
                width: '500px',
                height: '600px',
                backgroundColor: '#003366',

            }}>
                <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ 
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                 }}>
                    {
                        isHovered ? ( <video src={project.video} autoPlay muted className='project-vid' /> )
                         : ( <img src={project.image} alt="image" className='project-img'/> )
                    }
                    
                </div>
                <Typography variant='h2' sx={{ color: 'white' }}>{project.title}</Typography>
            </Box>
        </Grid>
        );
}

const Projects = () => {
    const projects = [
        {
            title: 'Kicks',
            madeWith: 'HTML, Tailwind, Laravel',
            duration: '2 Months',
            image: Kicks,
            video: KicksVideo,
            description: 'An e-commerce website for a sneakers consignment store that allows you to buy and sell sneakers',
            link: 'p'
        }, 
        {
            title: 'Tour',
            madeWith: 'HTML, Tailwind, Laravel',
            duration: '2 Weeks',
            image: 'Hello World',
            video: 'p',
            description: 'A tour and travel website that allows you to book a tour package around Bali',
            link: 'p'
        },
        {
            title: 'D Store',
            madeWith: 'HTML, Tailwind, React, Laravel',
            duration: '2 Months',
            image: 'Hello World',
            video: 'p',
            description: 'An e-commerce website for a sneakers and apparels store that allows you to buy sneakers and apparels',
            link: 'p'
        },
        {
            title: 'Ssamaya spa',
            madeWith: 'Elementor ( Wordpress )',
            duration: '1 Week',
            image: 'Hello World',
            video: 'p',
            description: 'An e-commerce website for a sneakers and apparels store that allows you to buy sneakers and apparels',
            link: 'p'
        },
    ];

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth={false} sx={{ height: '100%' }}>
                <Typography variant='h3' sx={{ fontWeight: 'bold', marginLeft: '130px' }}>Projects </Typography>
                <Grid container spacing={0} sx={{ display: 'flex', justifyContent:'center',flexWrap: 'wrap', marginTop: '20px' }}>
                    {
                        projects.map((project, index) => (
                            <RenderProjects project={project} key={index}/>
                        ))
                    }
                </Grid>
            </Container>
        </React.Fragment>
    );
}
export default Projects