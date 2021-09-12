import React from 'react';

const Heading = (props) => {
    const textStyle = {
        textDecoration: "none",
        fontSize: "50px",
        color: "#5F7A61",
        fontWeight: "normal",
        margin: "0",
        padding:"1%",
        fontFamily:"Roboto",

    }

    return (

        <div style ={{textAlign:"center"}}>
            <p style={textStyle}>{props.text}</p>
        </div>
    )
}

export default Heading