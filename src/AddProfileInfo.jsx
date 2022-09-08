import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import List from '@mui/material/List'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import { margin } from '@mui/system';
import { useSelector } from 'react-redux';
import { submitExtraDetails } from './helpers';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';

function TabPanel(props) {
    const { children, value, index, ...other } = props;



    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function AddProfileInfo() {
    const [value, setValue] = React.useState(0);

    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [city, setCity] = React.useState('');
    const [state, setState] = React.useState('');

    const [university, setUniversity] = React.useState('');
    const [degree, setDegree] = React.useState('');
    const [department, setDepartment] = React.useState('');
    const [semister, setSemister] = React.useState('');
    const [section, setSection] = React.useState('')
    const [rollNumber, setRollnumber] = React.useState('')

    const [name, setName] = React.useState('')
    const [gender, setGender] = React.useState('')
    const depts = ['CSE', 'ECE', 'ETE', 'EIE', 'ASE']
    const navigate = useNavigate()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSubmitButton = (event) => {
        event.preventDefault();

        const data = {
            phoneNumber: phoneNumber,
            address: address,
            city: city,
            state: state,
            university: university,
            degree: degree,
            department: department,
            semister: semister,
            section: section,
            usn: rollNumber
        }

        console.log(data);
        submitExtraDetails(data);
        navigate('/dashboard');
    };

    const handleNextButton = () => {
        setValue(value + 1)
    }
    const handlePrevButton = () => {
        setValue(value - 1)
    }

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value)
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    }
    const handleCityChange = (e) => {
        setCity(e.target.value)
    }
    const handleStateChange = (e) => {
        setState(e.target.value)
    }
    const handleUniversityChange = (e) => {
        setUniversity(e.target.value)
    }
    const handleSemisterChange = (e) => {
        setSemister(e.target.value)
    }
    const handleDegreeChange = (e) => {
        setDegree(e.target.value)
    }
    const handleDepartmentChange = (e) => {
        setDepartment(e.target.value)
    }
    const handleRollnumberChange = (e) => {
        setRollnumber(e.target.value)
    }
    const handleSectionChange = (e) => {
        setSection(e.target.value)
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value)
    }
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh', justifyContent: 'center' }}>
                <CssBaseline />

                <Grid
                    item
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></Grid>





                <Grid item xs={12} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{

                            mx: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >

                        <Box sx={{
                            width: '100%', marginX: '0',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            // justifyContent: 'center'
                        }}>

                            <Avatar
                                alt="Remy Sharp"
                                src='https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'

                                sx={{

                                    width: 150, height: 150,
                                    m: 1,
                                    bgcolor: 'secondary.main',
                                    display: { md: "none", lg: "none", xl: 'none' },
                                }}
                            />

                            <Box

                                sx={{
                                    bgcolor: 'background.paper',
                                    width: {
                                        xs: "100%"
                                    },

                                }}
                            >
                                <Tabs
                                    orientation="horizantal"
                                    variant="scrollable"
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="Vertical tabs example"
                                    scrollButtons={false}
                                    sx={{


                                    }}
                                >
                                    <Tab label="Personal Details" {...a11yProps(0)} />
                                    <Tab label="Academic Details" {...a11yProps(1)} />

                                </Tabs>
                                <TabPanel value={value} index={0}>
                                    <Box component="form" noValidate sx={{ mt: 3 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    autoComplete="given-name"
                                                    name="phoneNumber"
                                                    required
                                                    fullWidth
                                                    id="phoneNumber"
                                                    label="Phone Number"
                                                    autoFocus
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                                                    }}
                                                    value={phoneNumber}
                                                    onChange={handlePhoneNumberChange}
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Address"
                                                    required
                                                    fullWidth
                                                    multiline
                                                    rows={4}
                                                    value={address}
                                                    onChange={handleAddressChange}
                                                />

                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextField
                                                    autoComplete="given-name"
                                                    name="city"
                                                    required={true}
                                                    fullWidth
                                                    id="city"
                                                    label="City/Town"

                                                    value={city}
                                                    onChange={handleCityChange}

                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextField
                                                    autoComplete="given-name"
                                                    name="state"
                                                    required
                                                    fullWidth

                                                    id="state"
                                                    label="State"

                                                    value={state}
                                                    onChange={handleStateChange}
                                                />
                                            </Grid>
                                            <Box component={Grid}
                                                item

                                                xs={12}
                                                sx={{

                                                    display: 'flex',
                                                    justifyContent: 'flex-end'
                                                }}
                                            >
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        mt: 1, mb: 2,

                                                    }}
                                                    onClick={handleNextButton}
                                                >
                                                    Next
                                                </Button>
                                            </Box>

                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <Box component="form" noValidate sx={{ mt: 3 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    autoComplete="given-name"
                                                    name="universityName"
                                                    required
                                                    fullWidth
                                                    id="universityName"
                                                    label="University"
                                                    autoFocus

                                                    value={university}
                                                    onChange={handleUniversityChange}
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <TextField
                                                    autoComplete="given-name"
                                                    name="degree"
                                                    required
                                                    fullWidth
                                                    id="degree"
                                                    label="Degree / Program"

                                                    value={degree}
                                                    onChange={handleDegreeChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Department</InputLabel>
                                                    <Select

                                                        value={department}
                                                        label="Department"
                                                        onChange={handleDepartmentChange}
                                                    >
                                                        {
                                                            depts.map((d) => {
                                                                return <MenuItem value={d}>{d}</MenuItem>
                                                            })
                                                        }
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextField
                                                    autoComplete="given-name"
                                                    name="semister"
                                                    required
                                                    fullWidth
                                                    id="semister"
                                                    label="Semister"

                                                    value={semister}
                                                    onChange={handleSemisterChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextField
                                                    autoComplete="given-name"
                                                    name="section"
                                                    required
                                                    fullWidth
                                                    id="section"
                                                    label="Section"

                                                    value={section}
                                                    onChange={handleSectionChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} >
                                                <TextField
                                                    autoComplete="given-name"
                                                    name="rollNumber"
                                                    required
                                                    fullWidth
                                                    id="rollNumber"
                                                    label="Roll-Number"

                                                    value={rollNumber}
                                                    onChange={handleRollnumberChange}
                                                />
                                            </Grid>


                                            <Box component={Grid}
                                                item

                                                xs={12}
                                                sx={{

                                                    display: 'flex',
                                                    justifyContent: 'space-between'
                                                }}
                                            >
                                                <Button
                                                    variant="text"
                                                    sx={{
                                                        mt: 1, mb: 2,

                                                    }}
                                                    onClick={handlePrevButton}
                                                >
                                                    prev
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        mt: 1, mb: 2,

                                                    }}
                                                    onClick={handleNextButton}
                                                >
                                                    Next
                                                </Button>
                                            </Box>

                                        </Grid>
                                    </Box>
                                </TabPanel>


                            </Box>


                        </Box>

                    </Box>
                </Grid>
            </Grid >
        </ThemeProvider >
    );
}



