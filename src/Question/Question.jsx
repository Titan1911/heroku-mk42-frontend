import React from 'react'
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
// const questionData = {
//     question: "What is your name ?",
//     options: [
//         "Iron-Man", "Bruce-Banner", "Archie Andrews",
//         "Harry Potter",
//     ]
// }
const Question = ({ questionData, getOption }) => {
    const [selectedOption, setSelectedOption] = useState()
    const handleRadioChange = (e) => {
        setSelectedOption(e.target.value)
        getOption(e.target.value,questionData.question)
    }
    return (
        <Container component={'div'} maxWidth='md'
            sx={{
                border: '1px solid lightgrey',
                borderRadius: '5px',
                mb: 2,
                p: 2,
                backgroundColor: 'white',
                boxShadow: "0px 3px 15px rgba(0,0,0,0.2)"
            }}>

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"
                    sx={{
                        fontSize: '30px',
                        color: 'black'
                    }}
                >
                    {questionData.question}
                </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    onChange={(e) => { handleRadioChange(e) }}
                >
                    {
                        questionData?.options?.map((op) => {
                            return <FormControlLabel value={op} control={<Radio />} label={op} />
                        })
                    }
                </RadioGroup>
            </FormControl>
        </Container>
    )
}

export default Question