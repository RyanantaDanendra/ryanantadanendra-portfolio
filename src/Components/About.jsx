import '../App.css'
import * as React from 'react';
import { Container } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { createTheme } from '@mui/material';
import Me from '../assets/hero.jpeg';
import Poppins from '../assets/font/Poppins-Regular.ttf';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
// TIMELINE
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const experienceListRow = () => {
    const experiences = [
        "2.5 Month internship  at PT. Bali Pustaka Digital as a web developer",
    ];

    return (
        <>        
            {
                experiences.map((experience, index) => {
                    return (
                        <TimelineItem key={index}>                        
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>{experience}</TimelineContent>
                        </TimelineItem>
                    );
                })
            }
        </>
    );
}


const About = () => {
    const theme = createTheme({
        typography: {
          fontFamily: 'Poppins',
        },
    })

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth={false} sx={{
                height: '100%',
                marginTop: '20px',
                paddingTop: '50px',
                paddingBottom: '110px'
            }}>
                <Typography variant='h3' sx={{ fontWeight: 'bold', marginLeft: '130px', }}>About</Typography>
                <Grid container spacing={3} sx={{ paddingX: '130px'  }}>
                    <Grid item xs={6} sx={{ marginTop: '40px' }}>
                        <Typography variant='h4' sx={{ textAlign: 'center' }}>HEY THERE!</Typography>
                        <Typography variant='h6' sx={{ marginTop: '20px' }}>My name is A. A. Ngurah Bagus Ryananta Danendra, you can call me Danend 
                            <br />
                            <br />
                            I was born on the 13th of April 2006 and im from Denpasar, Bali.
                            <br />
                            <br />
                            Im a full - stack web developer and 
                            im currently a student at ITB Stikom Bali
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ marginTop: '40px' }}>
                        <Typography variant='h4' sx={{ textAlign: 'center' }}>Experience</Typography>
                        {/* <FixedSizeList
                            height={400}
                            width={360}
                            itemSize={46}
                            itemCount={1}
                            overscanCount={5}
                        >
                            {experienceListRow}
                        </FixedSizeList> */}

                        <Timeline>
                            {experienceListRow()}
                        </Timeline>

                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}
export default About