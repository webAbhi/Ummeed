import { Typography } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import 'aos/dist/aos.css';
const Footer = () => {

    const footer = {
        minHeight: "40vh",
        backgroundColor: "#27363b",
        textAlign: "center",
        padding: "4%"
    }

    const text = {
        color: "white",
        lineHeight: "1.8em",
        letterSpacing: "2px",
        fontWeight: "light"
    }

    const font = {
        width: "80px",
        height: "80px",
        fontWeight: "light",
        margin: "5%",
        color: "#75b2ad"
    }

    return (
        <div style={footer} >
            <FavoriteBorderOutlinedIcon style={font}></FavoriteBorderOutlinedIcon>
            <Typography variant="h4" 
            component="h3" 
            style={text} 
            data-aos="fade-up">
                Made with love by Abhijeet
            </Typography>
            <div data-aos="zoom-out">
                <a href ="https://github.com/webAbhi" target ="_blank">
                    <GitHubIcon style={font}></GitHubIcon>
                </a>
                <a href ="https://www.linkedin.com/in/abhijeet9911/" target ="_blank">
                    <LinkedInIcon style={font}></LinkedInIcon>
                </a>
            </div>
        </div>
    )
}

export default Footer
