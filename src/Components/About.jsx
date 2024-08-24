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

const experienceListRow = (props) => {
    const {index, style} = props;

    const experiences = [
        "2.5 Month internship  at PT. Bali Pustaka Digital as a web developer",
    ];

    return (
        <>        
            {
                experiences.map((experience, index) => {
                    return (
                        <ListItem style={style} key={index} components='div' sx={{ marginTop: '8px' }} disablePadding>
                            <ListItemText primary={experience} />
                        </ListItem>
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
            }}>
                <Typography variant='h3' sx={{ fontWeight: 'bold', marginLeft: '130px' }}>About</Typography>
                <Grid container spacing={3} sx={{ paddingX: '130px' }}>
                    <Grid item xs={6} sx={{ marginTop: '40px' }}>
                        <Typography variant='h4'>HEY THERE!</Typography>
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
                        <Typography variant='h4'>Experience</Typography>
                        <FixedSizeList
                            height={400}
                            width={360}
                            itemSize={46}
                            itemCount={1}
                            overscanCount={5}
                        >
                            {experienceListRow}
                        </FixedSizeList>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}
export default About