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
import Tour from '../assets/Logo/tour.jpg';
import TourVideo from '../assets/Logo/tour.mp4';
import Ssamaya from '../assets/Logo/ssamaya.png';
import SsamayaVideo from '../assets/Logo/ssamaya.mp4';
import { IconButton } from '@mui/material';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

const RenderProjects = ({project}) => {
    const [isHovered, setIsHovered] = useState(false);

        return (
            <Grid item xs={6} sx={{ 
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px',
            }} >
            <Box sx={{ 
                width: '600px',
                height: '700px',
                backgroundColor: '#003366',
                borderRadius: '10px',
                boxShadow: '5px 2px 8px'

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
                <Box sx={{ paddingX: '30px' }}>
                    <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'space-between'
                     }}>
                        <Typography variant='h2' sx={{ color: 'white', marginTop: '10px', fontWeight: 'bold' }}>{project.title}</Typography>
                        <a href={project.link}>
                            <IconButton>
                                <InsertLinkIcon sx={{ 
                                    fontSize: '3rem',
                                    color: 'white',
                                    '&:hover': {
                                        opacity: '50%',
                                        transition: '.2s ease-in'
                                    }
                                }} />
                            </IconButton>
                        </a>
                    </Box>
                    <Typography variant='h5' sx={{ color: 'white',}}>{project.description}</Typography>
                    <Typography variant='h5' sx={{ color: 'white', marginTop: '10px' }}>Made with: {project.madeWith}</Typography>
                    <Typography variant='h5' sx={{ color: 'white', marginTop: '10px' }}>Made in: {project.duration}</Typography>
                </Box>
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
            image: Tour,
            video: TourVideo,
            description: 'A tour and travel website that allows you to book a tour package around Bali',
            link: 'p'
        },
        {
            title: 'D Store',
            madeWith: 'HTML, Tailwind, React, Laravel',
            duration: '2 Months',
            image: 'p',
            video: 'p',
            description: 'An e-commerce website for a sneakers and apparels store that allows you to buy sneakers and apparels',
            link: 'p'
        },
        {
            title: 'Ssamaya spa',
            madeWith: 'Elementor ( Wordpress )',
            duration: '1 Week',
            image: Ssamaya,
            video: SsamayaVideo,
            description: 'An e-commerce website for a sneakers and apparels store that allows you to buy sneakers and apparels',
            link: 'https://ssamayaspabali.com/'
        },
    ];

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth={false} sx={{ height: '100%' }}>
                <Typography variant='h3' sx={{ fontWeight: 'bold', marginLeft: '130px' }}>Projects </Typography>
                <Grid container spacing={0} sx={{ display: 'flex', justifyContent:'center',flexWrap: 'wrap', marginTop: '20px', }}>
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