import React from 'react'; import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import slider1 from '../../../assets//slider/slider1.png'
import slider2 from '../../../assets//slider/slider2.png'
import slider3 from '../../../assets//slider/slider3.png'
import slider6 from '../../../assets/slider/slider6.png'
import slider5 from '../../../assets//slider/slider5.png'

const Banner = () => {
    return (
        <div > 
            <AwesomeSlider  >
                <div ><img className='max-h-full' src={slider1} alt="" /></div>
                <div><img className='max-h-full' src={slider2} alt="" /></div>
                <div><img className='max-h-full' src={slider3} alt="" /></div>
                <div><img className='max-h-full' src={slider6} alt="" /></div>
                <div><img className='max-h-full' src={slider5} alt="" /></div>
            </AwesomeSlider>
        </div>
    );
};

export default Banner;