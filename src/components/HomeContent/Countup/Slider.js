import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const Slider = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={5000}
        >
            
            <div data-src="https://cdn.pixabay.com/photo/2017/09/16/01/41/poor-2754335_960_720.jpg" />
            <div data-src="https://cdn.pixabay.com/photo/2015/10/30/10/47/earth-1013746_960_720.jpg" />
            <div data-src="https://cdn.pixabay.com/photo/2020/11/10/21/00/boy-5731001_960_720.jpg" />
            <div data-src="https://cdn.pixabay.com/photo/2019/09/09/11/54/contaminacion-4463385_960_720.jpg" />
        </AutoplaySlider>
    )
}

export default Slider
