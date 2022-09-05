import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getUserDetails } from '../helpers';
import { useDispatch } from 'react-redux';
import { getDataAction, signInAction } from '../actions'
import { useNavigate } from 'react-router-dom';
import { isUserAuthenticated } from '../helpers';
function Copyright({ appName }) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" sx={{ marginTop: '1rem' }}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/" >
                {appName}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn({ appName }) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const dispatcher = useDispatch();
    const navigate = useNavigate();
    React.useEffect(() => {
        if (isUserAuthenticated())
            navigate("/dashboard")
    }, [])
    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = await getUserDetails({ email: email, password: password })
        console.log(userData)
        if (userData != null) {
            const state = await dispatcher(signInAction(userData))
            const state2 = await dispatcher(getDataAction(userData));
            console.log(state)
            navigate('/dashboard')
        } else {
            alert("Invalid email and password");
        }

    };

    const handleEmailChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    return (
        <ThemeProvider theme={theme}>
            {

                <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />

                        <Box

                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                                sx={{
                                    marginTop: '8rem'
                                }}
                                variant="body1" color="text.secondary" align="left" >
                                <strong>Test Credentials</strong><br></br>
                                {"use the following id's for smoother experience because these ids have all the data mapped in the database :"}
                                <ul>
                                    <li><strong>Email: </strong>sahilahuja@gmail.com & <br></br> <strong>Password: </strong>sahilahuja123 </li>
                                    <li><strong>Email: </strong>iamtaufeeqahmedjst@gmail.com & <br></br> <strong>Password: </strong>hellolove </li>

                                </ul>
                            </Typography>
                        </Box>


                        <Copyright appName={appName} sx={{ mt: 8, mb: 4 }} />
                    </Container>
                    <Container component="main" maxWidth="xs">
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="/forgot-password" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="/sign-up" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>

                </Container>


            }


        </ThemeProvider>
    );
}
