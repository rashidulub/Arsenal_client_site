import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import LearnSec from '../LearnSec/Learnsec';
const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <LearnSec></LearnSec>
            <PopularInstructors></PopularInstructors>
            
        </div>
    );
};

export default Home;