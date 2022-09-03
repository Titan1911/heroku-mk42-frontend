import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Question from '../Question/Question';
import { Box } from '@mui/material/';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getQuizDetails, getUserDetails, getUserFulldata, getCourseDetails, submitQuizData } from '../helpers';

const Quiz = () => {
    const [quizData, setQuizData] = useState({});
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const answered = {};
    let score = 0;
    const { qid, cid } = useParams()
    const navigate = useNavigate()
    useEffect(() => {

        const dummyFunc = async () => {
            console.log("HElooooo")
            const userDetails = await getUserFulldata();
            const userID = userDetails.data._id
            const cData = await getCourseDetails(cid, userID);
            const attemptedQuizzes = cData.data.quizAttempted;
            console.log(attemptedQuizzes)
            attemptedQuizzes?.map(element => {
                console.log(element, qid)
                if (element.quizID === qid) setHasSubmitted(true)
                console.log(element.quizID, qid)
            });
        }
        dummyFunc();

        const dummy = async () => {
            if (!hasSubmitted) {
                const data = await getQuizDetails(qid)
                console.log("the quiz data is : ", data.data)
                setQuizData(data.data)
            }


        }
        dummy();
    }, [])
    const theme = createTheme()
    const getOption = (op, ques) => {
        answered[ques] = op;
    }
    const handleQuizSubmit = async () => {
        const userDetails = await getUserFulldata();
        const userID = userDetails.data._id
        const res = await submitQuizData(Object.values(answered), quizData._id, userID)
        console.log(res)
        score = res.data;
        alert("The score is :" + score)
        navigate("/course/" + cid)
    }
    return (
        <ThemeProvider theme={theme}>
            {(!hasSubmitted) ?
                <Box
                    sx={{
                        backgroundColor: '#1A73E8',
                        height: '100%'
                    }}
                >
                    <Container maxWidth={'80%'} component={'div'}>
                        <Typography component={'h1'} variant='h1'
                            sx={{
                                color: 'white',
                                fontFamily: "Raleway",
                                fontSize: { xs: "55px", md: "90px" },
                                pt: { sm: '20px', md: '40px' },
                                pb: { md: '90px' },
                                textAlign: 'center'

                            }}
                        >
                            {quizData.quizTitle}
                        </Typography>
                    </Container>
                    <Container maxWidth={'md'} component={'div'}>
                        {quizData?.questions?.map((question) => {
                            console.log(question)
                            return <Question questionData={question} getOption={getOption} />
                        })}
                    </Container>
                    <Container maxWidth={'md'} component={'div'}>

                        <Button fullWidth variant="outlined"
                            sx={{
                                mt: 2,
                                mb: 3,
                                paddingX: 5.5,
                                paddingY: 1.8,
                                borderRadius: 2,
                                backgroundColor: 'white',
                                color: '#1967D2',
                                fontSize: 19,
                                fontWeight: 500,
                                textTransform: 'none'
                            }}
                            onClick={handleQuizSubmit}
                        >Submit</Button>


                    </Container>
                </Box>
                :
                <Box>
                    <h1>Quiz already Submitted</h1 >
                </Box>
            }
        </ThemeProvider>
    )
}

export default Quiz;