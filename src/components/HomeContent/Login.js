import handleSocialLogin from '../../firebase/Auth';
import { googleProvider, gituhbProvider } from '../../firebase/providers';
import { GoogleLoginButton, GithubLoginButton } from "react-social-login-buttons";
import Heading from '../Common/Heading';
import Paper from "@material-ui/core/Paper";
import 'aos/dist/aos.css';
import {
    Box,
    Typography,
    Grid,
    Button,
    TextField,
    Link
} from "@material-ui/core";


function Login(props) {
    const handleProviderLogin = async (provider) => {
        const res = await handleSocialLogin(provider);
    }
    const formItem = {
        margin: " 2% 2% 2% 0",
    }
    const background = {
        backgroundColor: "#EEEEEE",
        minHeight: "100vh",
        margin: 0
    }
    const { email,
        setEmail,
        password,
        setPassword,
        hasAccount,
        setHasAccont,
        handleLogin,
        name,
        setName,
        handleSignup,
        emailError,
        passwordError
    } = props;

    return (
        <div style={background}>
            <>
                {
                    !hasAccount ?
                        <Heading text={"Create an Account to donate"} /> :
                        <Heading text={"Welcome back !! Login"} />
                }
            </>
            <Grid container justify="center">

                <Grid container
                    direction="column" alignItems="center" md={5}
                    style={{ padding: " 0 5%" }}
                >

                    <Paper elevation={6} 
                    style ={{padding :"8% ", margin:"4% 9% 0 9%"}}  data-aos="zoom-in-right">
                        <form noValidate autoComplete="off" >
                            {
                                !hasAccount ?
                                    <>
                                        <TextField id="standard-basic"
                                            label="Full Name"
                                            defaultValue="Error"
                                            style={formItem}
                                            fullWidth
                                            value={name}
                                            onChange={(e) => { setName(e.target.value) }}
                                        />
                                    </>
                                    :
                                    <> </>

                            }

                            <TextField id={emailError === '' ? "standard-basic" : "standard-error"}
                                error={emailError === '' ? false : true}
                                label={emailError === '' ? "Email" : emailError}
                                style={formItem}
                                fullWidth
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />

                            <TextField
                                id={passwordError === '' ? "standard-basic" : "standard-error"}
                                error={passwordError === '' ? false : true}
                                label={passwordError === '' ? "Password" : passwordError}
                                style={formItem}
                                fullWidth
                                value={password}
                                type="password"
                                onChange={(e) => { setPassword(e.target.value) }}
                            />


                            {
                                hasAccount ?
                                    <Button variant="contained"
                                        size="medium" style={formItem}
                                        color="primary" fullWidth
                                        onClick={handleLogin}
                                    >
                                        Login
                                    </Button>
                                    :
                                    <Button variant="contained"
                                        size="medium" style={formItem}
                                        color="primary" fullWidth
                                        onClick={handleSignup}
                                    >
                                        Sign in
                                    </Button>
                            }

                            {
                                hasAccount ?
                                    <Typography justify = "flex-end"
                                        variant="body2" color="textSecondary">
                                        Don't have an account ?
                                        <Link onClick={(e) => setHasAccont(!hasAccount)} style={{ cursor: "pointer" }}>
                                            Signup
                                        </Link>
                                    </Typography>
                                    :
                                    <Typography justify="flex-end"
                                        variant="body2" color="textSecondary">
                                        Already have an account ?
                                        <Link onClick={(e) => setHasAccont(!hasAccount)} style={{ cursor: "pointer" }}>
                                            Login
                                        </Link>
                                    </Typography>

                            }

                        </form>
                    </Paper>
                </Grid>
                <Grid container direction="column" alignItems="center" item md={4}>

                    <div style={{ margin: "5% 15%" }} data-aos="zoom-in-left">
                        <Box m={3}>
                            <GoogleLoginButton
                                onClick={() => { handleProviderLogin(googleProvider) }} size="35px" />
                        </Box>

                        <Box m={3}>
                            <GithubLoginButton
                                onClick={() => { handleProviderLogin(gituhbProvider) }} size="35px" />
                        </Box>

                    </div>

                </Grid>
            </Grid>
        </div>
    )
}
export default Login