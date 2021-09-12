import React from 'react'
import Projectcard from './Projectcard'
import Heading from '../Common/Heading'
import {Grid} from '@material-ui/core'
import {cardData} from './Data.js'
function Projects() {

    const background = {
        backgroundColor: "#EEEEEE",
        minHeight: "100vh",
        
    }
    let counter =1;
    return (
        <div style ={background}>
            <Heading text={"Projects"} />
            <Grid container justify ="center" >
               {

               cardData.map((data) =>(
                   counter++ ==3 ?

                    <Grid item container xs ={12} justify="center">
                    <Projectcard 
                    cardHeading = {data.heading} 
                    mainText ={data.text}
                    expandableText ={data.expandableText}
                    imageSource ={data.imageSource}                    
                    />
                    </Grid>
                    :
                    <Grid item style={{margin :"4 14%"}} style={{margin:"5% 7%"}}>
                    <Projectcard 
                    cardHeading = {data.heading}
                    mainText ={data.text}
                    expandableText ={data.expandableText}
                    imageSource ={data.imageSource}      
                    
                    
                    />
                    </Grid>

                ))
               }
            </Grid>
            
            

        </div>
    )
}

export default Projects