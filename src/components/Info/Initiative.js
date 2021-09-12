import Heading from '../Common/Heading'
import { data } from './Data '
import 'aos/dist/aos.css';

const Initiative = () => {
    const main = {
        backgroundColor: "#EEEEEE",
        minHeight: "100vh",
        margin: 0,
        paddingBottom:"14%"
    }
    const content = {
        margin: "0 12%"
    }
    const heading ={
        fontSize :"40px",
        lineHeight:"1.2em",
        fontWeight:"normal",
        marginBottom:"-20px"
    }
    const para ={
        fontSize :"22px",
        lineHeight:"1.5em",
        fontWeight:"normal",
        textAlign: "justify",
        textJustify: "inter-word",
        letterSpacing:"1px"
    }
    
    return (
        <div style={main}>
            <Heading text={"Our Story"} />
            <div style={content}>
                {
                    data.map((element) => (
                        <div data-aos="fade-up">
                            <h3 style={heading}>{element.heading}</h3>
                            <h4 style ={para}>{element.text}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Initiative
