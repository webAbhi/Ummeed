import React from 'react'
import { Box, Grid, container } from '@material-ui/core';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";


const Count = ({ target, text, suffix }) => {
    const countStyle = {
        fontSize: "400%",
        fontWeight: "normal",
        color: "#548CA8",
    }
    const textStyle = {
        fontSize: "170%",
        fontWeight: "normal",
    }
    return (
        <Box textAlign="center" m={3}>
            <Box  >
                <CountUp
                    style={countStyle}
                    start={0}
                    end={target}
                    duration={4}
                    suffix={suffix}

                />
            </Box>
            <Box m={-3}>
                <h4 style={textStyle}>{text}</h4>
            </Box>
        </Box>

    )
}

export default Count
