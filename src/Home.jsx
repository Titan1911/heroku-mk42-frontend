import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import StudentsImage from "./images/group-students.png"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Home = ({ appName }) => {
    return (



        <Grid container sx={{
            backgroundColor: '#1A73E8',
            height: '100vh',
            paddingTop: {
                md: 22
            }
        }}>

            <Grid item xs={12} lg={7}>
                <Box
                    sx={{
                        paddingLeft: {
                            md: 8,
                        },
                        paddingTop: {
                            md: 15,
                        },
                        padding: {
                            xs: 2,
                        },
                        display: {
                            xs: 'flex',
                            md: 'block'
                        },
                        flexDirection: {
                            xs: 'column'
                        },
                        alignItems: {
                            xs: 'center'
                        },


                    }}>
                    <Typography
                        component='h1'
                        sx={{

                            fontSize: {
                                xs: 35,
                                md: 45
                            },
                            textAlign: {
                                xs: 'center',
                                md: 'start'
                            },

                            fontWeight: {
                                md: 500,
                            },
                            color: 'white'

                        }}
                    >
                        Seamless connection with your College / School
                    </Typography>
                    <Typography
                        component='h1'
                        sx={{
                            fontSize: {
                                xs: 22,
                                md: 27
                            },
                            textAlign: {
                                xs: 'center',
                                md: 'start'
                            },

                            fontWeight: {
                                md: 400,
                            },
                            color: 'white'

                        }}
                    >
                        Made by Engineering Students with Love
                        for Science & Tech
                    </Typography>
                    <Stack spacing={2} direction="row"
                        sx={{
                            marginTop: 4

                        }}
                    >


                        <Button href='/sign-in' variant="contained"
                            sx={{
                                paddingX: 5.5,
                                paddingY: 1.8,
                                borderRadius: 2,
                                backgroundColor: 'white',
                                color: '#1967D2',
                                fontSize: 19,
                                fontWeight: 500,
                                textTransform: 'none'
                            }}
                        >Get Started</Button>


                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={12} lg={5}>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box
                        margin='auto' component='img'
                        src={StudentsImage}
                        sx={{
                            width: {
                                xs: 270,
                                md: 500
                            },


                        }}
                    >

                    </Box>
                </Box>
            </Grid>
        </Grid >



    );
}
export default Home;