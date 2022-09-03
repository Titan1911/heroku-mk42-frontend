import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material/';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Question from '../Question/Question';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
const quizData = {
    quizTitle: "",
    questions: []
}
const QuizMaker = () => {
    const theme = createTheme()



    const [stateQuizData, setStateQuizData] = useState({});
    const [title, setTitle] = useState();
    const [questionText, setQuestionText] = useState();
    const [optionOne, setOptionOne] = useState();
    const [optionTwo, setOptionTwo] = useState();
    const [optionThree, setOptionThree] = useState();
    const [optionFour, setOptionFour] = useState();




    const handleTitleChange = (e) => {
        setTitle(e.target.value)
        console.log(title)
    }
    const handleQuestionTextChange = (e) => {
        setQuestionText(e.target.value)
        console.log(questionText)
    }
    const handleOptionOnechange = (e) => {
        setOptionOne(e.target.value)
    }
    const handleOptionTwochange = (e) => {
        setOptionTwo(e.target.value)
    }
    const handleOptionThreechange = (e) => {
        setOptionThree(e.target.value)
    }
    const handleOptionFourchange = (e) => {
        setOptionFour(e.target.value)
    }

    const handleAddQuestion = () => {

        quizData.questions.push({
            question: questionText,
            options: [
                optionOne, optionTwo, optionThree, optionFour
            ]
        })
        setStateQuizData(quizData)
    }
    const handleMakeQuiz = () => {
        alert("Be sure u cant edit later !!")
        quizData.quizTitle = title;

        setQuestionText('')
        setOptionFour('')
        setOptionOne('')
        setOptionTwo('')
        setOptionThree('')

    }

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    backgroundColor: '#1A73E8',
                    height: '100vh',
                    fontFamily: "Raleway",
                }}
            >

                <Container maxWidth={'lg'} component={'div'}
                    sx={{
                        py: 3,
                    }}
                >
                    <Box
                        sx={{
                            px: 3,
                            backgroundColor: 'white',
                            border: '1px solid lightgrey',
                            borderRadius: '5px',
                            boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
                        }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="quiz-title"
                            label="Quiz Title"
                            name="Quiz Title"
                            autoFocus
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </Box>


                </Container>
                <Container maxWidth={'md'} component={'div'}>
                    {quizData.questions.map((question) => {
                        return <Question questionData={question} />
                    })}
                </Container>
                <Container maxWidth={'md'} component={'div'}>
                    <Box className='questionMaker'
                        sx={{
                            px: 3,
                            py: 2,
                            backgroundColor: 'white',
                            border: '1px solid lightgrey',
                            borderRadius: '5px',
                            boxShadow: "0px 3px 15px rgba(0,0,0,0.2)",
                        }}
                    >
                        <Typography component={'h1'} variant='h1'
                            sx={{
                                fontFamily: "Raleway",
                                fontSize: { xs: "35px", md: "55px" },
                                pt: { sm: '11px', md: '20px' },
                                pb: { md: '10px' },
                                textAlign: 'center'

                            }}
                        >
                            New Question
                        </Typography>
                        <TextField
                            margin="dense"
                            required
                            fullWidth
                            id="questionTitle"
                            label="Question Text"
                            name="Question Text"
                            autoFocus
                            value={questionText}
                            onChange={handleQuestionTextChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="optionOne"
                            label="Option One"
                            name="Option One"
                            autoFocus
                            value={optionOne}
                            onChange={handleOptionOnechange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="optionOne"
                            label="Option One"
                            name="Option One"
                            autoFocus
                            value={optionTwo}
                            onChange={handleOptionTwochange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="optionOne"
                            label="Option One"
                            name="Option One"
                            autoFocus
                            value={optionThree}
                            onChange={handleOptionThreechange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="optionOne"
                            label="Option One"
                            name="Option One"
                            autoFocus
                            value={optionFour}
                            onChange={handleOptionFourchange}
                        />
                        <Box
                            sx={{
                                px: 1,
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}
                        >
                            <Button variant='contained'
                                sx={{
                                    mt: 2,
                                    mb: 3,
                                    paddingX: 1.5,
                                    paddingY: 0.8,
                                    borderRadius: '3px',
                                    color: '#white',
                                    fontSize: 12,
                                    fontWeight: 500,

                                }}
                                onClick={handleAddQuestion}
                            >Add Question</Button>
                        </Box>
                    </Box>

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
                        onClick={handleMakeQuiz}
                    >Make-Quiz</Button>
                </Container>

            </Box>
        </ThemeProvider>
    )
}

export default QuizMaker
