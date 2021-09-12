import { Grid } from '@material-ui/core';
import Count from './Count'
import Slider from './Slider'
import 'aos/dist/aos.css';

const CountInterface = () => {
    const data = [
        {
            target: 12520,
            text: "Happy Faces",
            suffix: "+"
        },
        {
            target: 32,
            text: "Volunteers",
            suffix: ""
        },
        {
            target: 109,
            text: "Success Mission",
            suffix: "+"
        },
        {
            target: 48,
            text: "Cities Work",
            suffix: ""
        },
    ]
    const divStyle = {
        height: "140vh",
        padding: "4%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#EEEEEE",

    }

    return (
        <>

            <div style={divStyle}>
                <Grid container justify="center" >
                    <Grid item data-aos="fade-right" xs={12} md={12} style ={{margin:"10% 23%"}}>
                        <Slider />

                    </Grid>
                    {
                        data.map(element => (
                            <Grid data-aos="zoom-out"
                                item md={3} xs={12}>
                                <Count target={element.target} text={element.text} suffix={element.suffix} />
                            </Grid>
                        ))
                    }
                </Grid>

            </div>
        </>
    )
}

export default CountInterface
