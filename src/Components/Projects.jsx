import * as React from 'react';
import '../App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';

const Projects = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth={false} sx={{ height: '100vh' }}>
                <Typography variant='h3' sx={{ fontWeight: 'bold', marginLeft: '130px' }}>Projects </Typography>
                <Grid container spacing={5} sx={{ display: 'flex', justifyContent:'center' }}>
                    <Grid item xs={6}>
                        <Box sx={{ 
                            Width: '10px',
                            height: '600px',
                            backgroundColor: 'black',

                         }}></Box>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
export default Projects