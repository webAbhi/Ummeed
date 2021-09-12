import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: "#EEEEEE",
    },
    navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
    },
    logo: {
        textDecoration: "none",
        flexGrow: "1",
        cursor: "pointer",
        marginLeft: "2%"
    },
    link: {
        textDecoration: "none",
        fontSize: "18px",
        marginLeft: theme.spacing(5),
    },
}));

function Navbar({ user, handleLogout }) {

    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (

        <AppBar className={classes.main} position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.logo}>
                        <Link to="/" className={classes.logo} 
                        data-aos="fade-down" >
                            Ummeed
                        </Link>
                    </Typography>


                    {isMobile ? (
                        <DrawerComponent handleLogout={handleLogout} user={user} />
                    ) : (
                        <div className={classes.navlinks}>
                            <Link to="/Donate" className={classes.link} data-aos="fade-down-rigth">
                                Donate
                            </Link>
                            <Link to="/Projects" className={classes.link} data-aos="fade-down-rigth">
                                Projects
                            </Link>
                            <Link to="/Initiative" className={classes.link} data-aos="fade-down-rigth">
                                Our Story
                            </Link>
                            {
                                (user) ?
                                    <Link to="/" className={classes.link} onClick={handleLogout} data-aos="fade-down-rigth">
                                        Signout
                                    </Link>
                                    :
                                    <Link to="/Login" className={classes.link} data-aos="fade-down-rigth">
                                        Login
                                    </Link>
                            }
                        </div>
                    )}
                </Toolbar>

        </AppBar>





    );
}
export default Navbar;
