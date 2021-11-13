import React from 'react';

import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';
import Offers from '../Offers/Offers';
import ReviewPart from '../ReviewPart/ReviewPart';

const Home = () => {
    return (
        <div className="overview-hidden">
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Offers></Offers>
            <ReviewPart></ReviewPart>
            
            
        </div>
    );
};

export default Home;