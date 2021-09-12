import React,{useState} from 'react'
import Heading from '../Common/Heading';
import { Grid, Paper, Typography } from "@material-ui/core";
import GooglePay from './paymentSystem/Googlepay'
import Input from './Input';
import Donatetext from './DonateText';
function Donate() {
    const background = {
        backgroundColor: "#EEEEEE",
        minHeight: "100vh",
        msargin: 0
    }
    const [amount, setamount] = useState('');
    return (
        <div style={background}>
            <Heading text={"Contribute to the cause"} />
            <Grid container spacing={3} justify="center">
                <Grid item direction="column" alignItems="flex-end"
                    style={{ padding: " 0 15%", marginTop:"3%" }} xs={12} sm={7}>
                    <Paper style ={{padding:"10% 10%", borderRadius:"5%"}}>
                        <Input setamount ={setamount} />
                        <GooglePay amount ={amount}/>
                    </Paper>

                </Grid>
                <Grid  item 
                justify="center" xs={12} sm={5} >
                    <Donatetext />
                </Grid>

            </Grid>
        </div>
    )
}

export default Donate;