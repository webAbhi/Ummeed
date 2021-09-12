import React from 'react'
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import MidLanding from "./MidLanding";
import Footer from './Footer';
import CountInterface from './Countup/CountInterface';
import education from "./Images/education.png"
import 'aos/dist/aos.css';
function Landing() {
    const resize = {
        padding: "5%",
        margin: "10% 0 10% 0",
        height: "55%",
        width: "76%"
    }
    const head = {
        fontWeight: "Normal",
        paddingBottom: "3%"
    }
    const background = {
        backgroundColor: "#EEEEEE",
        minHeight: "95vh"
    }
    const maincontent = {
        margin: "25%  0 0 10%",
    }

    return (
        <>
            <Grid container style={background}>


                <Grid data-aos="fade-right" container direction="column"
                    alignItems="left" sm={6}>

                    <Box style={maincontent} >
                        <Typography style={head}
                            variant="h3">
                            Ummeed
                        </Typography>

                        <Typography variant="h6">
                            We work towards creating quality and equitable opportunities for
                            humans and communities to learn and grow with a view to long term
                            sustainable change.
                        </Typography>
                        <Box mt={3}>
                        
                                <Button variant="contained"
                                    size="large" color="primary" 
                                    component ={Link} to ="/Initiative">

                                    Who we are
                                </Button>

                        </Box>

                    </Box>

                </Grid>
                <Grid data-aos="fade-left" container item sm={6}>
                    <img src={education} style={resize} />
                </Grid>
            </Grid>
            <div >

                <MidLanding />
                <CountInterface />
                <Footer />

            </div >
        </>
    )
}

export default Landing