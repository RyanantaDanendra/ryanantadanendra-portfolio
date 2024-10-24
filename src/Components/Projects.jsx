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
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const RenderProjects = ({project}) => {
    const [isHovered, setIsHovered] = useState(false);

        return (
            <Grid item xs={12} data-aos='fade-up' data-aos-delay='400' sx={{ 
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px',
            }} >
            <Box sx={{ 
                width: '600px',
                height: '700px',
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
                        <Typography variant='h2' sx={{ marginTop: '10px', fontWeight: 'bold' }}>{project.title}</Typography>
                        <a href={project.link}>
                            <IconButton>
                                <InsertLinkIcon sx={{ 
                                    fontSize: '3rem',
                                    color: 'black',
                                    '&:hover': {
                                        opacity: '50%',
                                        transition: '.2s ease-in'
                                    }
                                }} />
                            </IconButton>
                        </a>
                    </Box>
                    <Typography variant='h5' sx={{ marginTop: '10px' }}>Made with: {project.madeWith}</Typography>
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
            image: Kicks,
            video: KicksVideo,
            link: 'https://github.com/RyanantaDanendra/latihan-Laravel'
        }, 
        {
            title: 'Tour',
            madeWith: 'HTML, Tailwind, Laravel',
            image: Tour,
            video: TourVideo,
            link: 'https://github.com/RyanantaDanendra/tour'
        },
        {
            title: 'D Store',
            madeWith: 'HTML, Tailwind, React, Laravel',
            image: 'p',
            video: 'p',
            link: 'https://github.com/RyanantaDanendra/dStore'
        },
        {
            title: 'Ssamaya spa',
            madeWith: 'Elementor ( Wordpress )',
            image: Ssamaya,
            video: SsamayaVideo,
            link: 'https://ssamayaspabali.com/'
        },
    ];

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth={false} sx={{ height: '100%', marginTop: '10rem' }}>
                <Typography variant='h3' data-aos='fade-right' data-aos-delay='400' sx={{ fontWeight: 'bold', marginLeft: '130px' }}>Projects </Typography>
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