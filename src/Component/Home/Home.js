import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import Banner from '../Banner/Banner';
import ExtraPart from '../ExtraPart/ExtraPart';
import HomeProducts from '../HomeProducts/HomeProducts';
import NavigationBar from '../NavigationBar/NavigationBar';
import Offers from '../Offers/Offers';
import ReviewPart from '../ReviewPart/ReviewPart';

const Home = () => {
    const [loadding,setLoadding]=useState(true)

    useEffect(()=>{
        fetch('https://powerful-bayou-53286.herokuapp.com/getProducts')
        .then(res=>res.json())
        .then(data=>{
            // setAllProducts(data.slice(0,12))
            setLoadding(false)
        })
    },[])
    return (
        <div className="overview-hidden">
            <NavigationBar></NavigationBar>
            <Banner></Banner>
         { !loadding ? <div>
            <HomeProducts></HomeProducts>
            <ExtraPart/>
            <Offers></Offers>
            <ReviewPart></ReviewPart></div> :<ReactLoading className="my-5  mx-auto" type="bars" color="blue" height="8rem" width="6rem"  />}
            
            
        </div>
    );
};

export default Home;