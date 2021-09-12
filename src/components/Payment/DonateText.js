import React from 'react';
import { Box, Typography, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const IndividualListItem = ({text}) => {
    return (
            <Box >
                <ListItem>
                        <CheckCircleIcon style ={{paddingRight:"3%", color:"#78ab7b"}}/>
                    <ListItemText primary={text} />
                </ListItem>
            </Box>
    )
}

const DonateText = () => {

    return (
        <div>
            <Box  width ="60%">
                <ListItem> <h2> Highlights</h2></ListItem>
                <IndividualListItem text ="Help transform a human life"/>
                <IndividualListItem text ="Trustable application by millions."/>
                <IndividualListItem text ="Keep a track of your donations."/>
                
            </Box>
        </div>
    )
}

export default DonateText;
