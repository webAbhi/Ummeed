import React from 'react';
import { Box, TextField } from '@material-ui/core'

const Input = (props) => {
    const OverallStyle = {
        margin :"1% 11%",
        textAlign: "center",
        margin:"6%"
    }
    const { setamount } = props;
    return (

        <Box display="flex"
            justifyContent="center"
            alignItems="center"
            style ={OverallStyle}
        >
            <TextField id="standard-basic"
                label="Enter the amount"
                fullWidth
                type = "Number"
                onChange = {(e)=>{setamount(e.target.value)}}
                
            />

        </Box>
    )
}

export default Input;
