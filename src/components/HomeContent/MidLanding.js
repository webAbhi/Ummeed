import React from 'react'
import { Box, Grid, Typography, Button, Container } from "@material-ui/core";
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function MidLanding() {
    const background = {
        minHeight: "120vh",
        padding: "0% 4%"
    }
    const text = {
        textAlign: "justify",
        textJustify: "inter-word",
        paddingBottom: "3%",
        lineHeight: "1.9" 
}

return (

    <Grid style={{ backgroundColor: "#548CA8" }}>
        <Container>
            <Grid item container
                direction="column"
                justifyContent="center"
                alignItems="center" style={background}>

                <Typography variant="h3"
                    data-aos="fade-up"
                    style={{ padding: "3%" }}>
                    Support a cause you care about
                </Typography>

                <Typography variant="h6"
                    data-aos="fade-up"
                    style={text}> You may find problems in almost everything!
                    Our society is facing lots of issues! You are real You when you Rise, Take a Step and Try to Eradicate these problems.
                    Checkout the initiatives or missions where you can support our society.
                </Typography>
                <Box >

                    <Button mt={4} data-aos="fade-up"
                        variant="contained"
                        size="large"
                        color="primary"  component ={Link} to ="/Initiative" >
                        Our mission
                    </Button>
                </Box>
            </Grid>
        </Container>
    </Grid>



)
}

export default MidLanding