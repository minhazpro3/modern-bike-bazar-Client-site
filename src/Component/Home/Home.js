import React from 'react';
import Banner from '../Banner/Banner';
import ExtraPart from '../ExtraPart/ExtraPart';
import HomeProducts from '../HomeProducts/HomeProducts';
import NavigationBar from '../NavigationBar/NavigationBar';
import Offers from '../Offers/Offers';
import ReviewPart from '../ReviewPart/ReviewPart';

const Home = () => {

    
    return (
        <div className="overview-hidden">
            <NavigationBar></NavigationBar>
            <Banner></Banner>
          <div>
            <HomeProducts></HomeProducts>
            <ExtraPart/>
            <Offers></Offers>
            <ReviewPart></ReviewPart></div> 
            
            
        </div>
    );
};

export default Home;