import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { getCourseDetails, getQuizDetails } from '../helpers';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUserFulldata } from '../helpers';
const color = "#71357C"


const Course = () => {
    const { id } = useParams();
    const [courseData, setCourseData] = useState({})
    const navigate = useNavigate();
    useEffect(() => {
        const dummyFunc = async () => {
            // const cData = await getCourseDetails("628fe97106f70bf99759c0cd");
            const userDetails = await getUserFulldata();
            const userID = userDetails.data._id;

            const cData = await getCourseDetails(id, userID);
            setCourseData(cData.data)
            console.log("the  cdata", cData.data)
        }
        dummyFunc();


    }, [])
    console.log("state data is ", courseData.course)
    const handleCourseClick = (qid, cid) => {
        navigate("/quiz/" + cid + "/" + qid)
    }
    return (
        <Box component={'div'} className='course'
            sx={{
                fontFamily: 'Raleway, sans-serif ',

                width: '100vw'
            }}
        >
            <Box component={'div'} className="personal-details"
                sx={{
                    color: "white",
                    paddingBottom: { xs: "6rem", md: "10rem" },
                    paddingTop: "2rem",
                    backgroundColor: '#1A73E8',
                }}
            >
                <Typography component={'h1'} align='center'
                    sx={{ fontSize: { xs: '45px', md: '80px' } }}
                >
                    {courseData?.course?.courseTitle}
                </Typography>
                <Typography component={'h3'} align='center'
                    sx={{ fontSize: { xs: '15px', md: '30px' } }}
                >
                    {courseData?.course?.courseCode}
                </Typography>
            </Box>
            <Box component={'div'} className="courses-details"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: { xs: '-4rem', md: '-8rem' },
                    backgroundColor: "white",
                    marginX: {
                        xs: "1rem",
                        md: '7rem'
                    },
                    border: '1px solid lightgrey',
                    borderRadius: '5px'
                }}
            >

                <Grid container
                    sx={{
                        margin: '1rem'

                    }}
                >

                    {
                        courseData?.course?.quizzes?.map((d, i) => {
                            const scoredMarks = (courseData.quizAttempted[i]) ? courseData.quizAttempted[i].score : 0;
                            return (
                                <Grid item xs={12}
                                    onClick={() => { handleCourseClick(d._id, courseData.course._id) }}
                                >
                                    <Box component={'div'} className='course'
                                    >
                                        <Typography component={'h2'}
                                            center
                                            style={{
                                                backgroundColor: color,
                                                border: '1px solid ' + color,
                                            }}
                                            sx={{

                                                color: "white",
                                                fontSize: "1.7rem",
                                                padding: "2rem",
                                                paddingY: "5rem",
                                                borderRadius: '5px',
                                                border: '1px solid #71357C',
                                                margin: '1rem',

                                            }}
                                        >
                                            {d.title + "     " + `${scoredMarks}` + "/" + `${d.maxMarks}`}
                                        </Typography>
                                    </Box>
                                </Grid>

                            )
                        })
                    }

                </Grid>

            </Box>
        </Box>

    )
}

export default Course;
